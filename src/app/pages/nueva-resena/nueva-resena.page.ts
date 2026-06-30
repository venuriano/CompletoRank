import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { StorageService } from '../../services/storage';
import { Resena } from '../../interfaces/resena.interface';

@Component({
  selector: 'app-nueva-resena',
  templateUrl: './nueva-resena.page.html',
  styleUrls: ['./nueva-resena.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NuevaResenaPage {
  comentario: string = '';
  puntuacion: number = 5; // Valor por defecto
  fotoCapturada: string | undefined;
  guardando: boolean = false;

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  /**
   * Abre la cámara nativa del dispositivo.
   * Configuramos la calidad al 100% para obtener la mejor resolución y nitidez en la imagen.
   */
  async tomarFotografia() {
    try {
      const image = await Camera.getPhoto({
        quality: 100, 
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera // Fuerza el uso de la cámara, no la galería
      });

      // Guardamos la imagen en formato Base64 para mostrarla en el HTML y guardarla en Storage
      this.fotoCapturada = image.dataUrl;
    } catch (error) {
      console.error('Error al capturar la imagen o el usuario canceló', error);
    }
  }

  /**
   * Simula el guardado de la reseña en la base de datos local usando la interfaz correcta.
   */
  async guardarResena() {
    if (!this.comentario) return;

    this.guardando = true;

    // Construimos el objeto respetando tu interfaz Resena
    const nuevaResena: Resena = {
      id: Date.now(), // ID temporal basado en la fecha
      usuarioId: 1,   // En un caso real, esto viene del AuthService
      localId: 1,     // Aquí iría el ID del local que se está evaluando
      comentario: this.comentario,
      puntuacion: this.puntuacion,
      fecha: new Date(),
      imagen: this.fotoCapturada
    };

    // Obtenemos reseñas previas para no sobreescribirlas
    const resenasGuardadas = await this.storageService.get('resenas_offline') || [];
    resenasGuardadas.push(nuevaResena);
    
    // Guardamos el arreglo actualizado en el Storage
    await this.storageService.set('resenas_offline', resenasGuardadas);

    this.guardando = false;
    
    // Volvemos a la lista de locales
    this.router.navigate(['/locales']);
  }
}