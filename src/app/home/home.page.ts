import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

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
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    MatCardModule
  ],

  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(
          '800ms ease-out',
          style({
            opacity: 1
          })
        )
      ])
    ])
  ]
})
export class HomePage {

  usuario = 'Vicente';

  constructor(private router: Router) {}

  irLocales() {
    this.router.navigate(['/locales']);
  }

  irResena() {
    this.router.navigate(['/nueva-resena']);
  }

  irRanking() {
    this.router.navigate(['/ranking']);
  }

}
