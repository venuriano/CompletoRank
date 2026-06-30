import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Consulta al AuthService si el estado actual es logueado
    if (this.authService.isLoggedIn()) {
      return true; // Acceso permitido
    } else {
      // Si no está logueado, lo patea de vuelta al login
      this.router.navigate(['/login']);
      return false;
    }
  }
}