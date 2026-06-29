import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonRange,
  IonTextarea,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-nueva-resena',
  templateUrl: './nueva-resena.page.html',
  styleUrls: ['./nueva-resena.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonRange,
    IonTextarea,
    IonButton
  ]
})
export class NuevaResenaPage {

  pan = 8;
  verduras = 8;
  salsas = 8;
  creatividad = 8;
  atencion = 8;

  get promedio(): number {

    return (
      this.pan +
      this.verduras +
      this.salsas +
      this.creatividad +
      this.atencion
    ) / 5;

  }

}