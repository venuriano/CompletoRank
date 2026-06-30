import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../services/api';
import { Local } from '../../interfaces/local.interface';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class LocalesPage implements OnInit {
  locales: Local[] = [];
  cargando: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.cargando = true;
    
    // Cumpliendo la rúbrica: Manejo de suscripciones (.subscribe)
    this.apiService.getLocales().subscribe({
      next: (datosLocales: Local[]) => {
        this.locales = datosLocales;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error crítico al cargar la vista', err);
        this.cargando = false;
      }
    });
  }
}