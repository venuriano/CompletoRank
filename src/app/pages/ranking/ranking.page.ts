import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonBadge
  ]
})
export class RankingPage {

  ranking = [
    { nombre: 'Dominó', nota: 9.4 },
    { nombre: 'Fuente Alemana', nota: 9.1 },
    { nombre: 'Elkika', nota: 8.9 },
    { nombre: 'Completería Juanito', nota: 8.7 }
  ];

}
