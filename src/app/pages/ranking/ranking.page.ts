import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../services/api';
import { StorageService } from '../../services/storage';
import { Local } from '../../interfaces/local.interface';
import { Resena } from '../../interfaces/resena.interface';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class RankingPage implements OnInit {
  localesRankeados: Local[] = [];
  resenasRecientes: Resena[] = [];
  cargando: boolean = true;

  constructor(
    private apiService: ApiService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.cargarDatos();
  }

  async cargarDatos() {
    this.cargando = true;
    
    // 1. Obtener locales mediante consulta asíncrona (API o Storage si hay fallo 404/sin internet)
    this.apiService.getLocales().subscribe(async (datos) => {
      // Ordenamos el arreglo de mayor a menor puntuación
      this.localesRankeados = datos.sort((a, b) => b.puntuacion - a.puntuacion);
      
      // 2. Rescatar las reseñas con fotos guardadas offline en el Storage
      const resenasGuardadas = await this.storageService.get('resenas_offline');
      this.resenasRecientes = resenasGuardadas ? resenasGuardadas : [];
      
      this.cargando = false;
    });
  }
}