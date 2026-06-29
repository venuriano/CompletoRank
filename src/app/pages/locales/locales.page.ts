import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
  standalone: true,

  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel
  ],

  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)'
        }),
        animate(
          '600ms ease-out',
          style({
            transform: 'translateX(0)'
          })
        )
      ])
    ])
  ]
})
export class LocalesPage {

  locales = [
    { nombre: 'Dominó', nota: 4.8 },
    { nombre: 'Fuente Alemana', nota: 4.7 },
    { nombre: 'Elkika', nota: 4.6 },
    { nombre: 'Completería Juanito', nota: 4.5 }
  ];

}