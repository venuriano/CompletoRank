import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonContent,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonInput,
    IonButton
  ]
})
export class LoginPage {

  constructor(private router: Router) {}

  ingresar() {
    this.router.navigate(['/home']);
  }

}
