import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule] // Importante en Standalone
})
export class LoginPage {
  correo: string = '';
  password: string = '';
  mensajeError: string = '';
  cargando: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  async iniciarSesion() {
    if (!this.correo || !this.password) {
      this.mensajeError = 'Por favor, completa todos los campos.';
      return;
    }

    this.cargando = true;
    this.mensajeError = '';

    // Llamamos al servicio que maneja el Storage y el estado
    const exito = await this.authService.login(this.correo, this.password);
    
    this.cargando = false;
    
    if (exito) {
      this.router.navigate(['/locales']); // Si es exitoso, pasa al listado
    } else {
      this.mensajeError = 'Error al iniciar sesión.';
    }
  }
}