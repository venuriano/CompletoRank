import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'locales',
    loadComponent: () => import('./pages/locales/locales.page').then( m => m.LocalesPage)
  },
  {
    path: 'nueva-resena',
    loadComponent: () => import('./pages/nueva-resena/nueva-resena.page').then( m => m.NuevaResenaPage)
  },
  {
    path: 'ranking',
    loadComponent: () => import('./pages/ranking/ranking.page').then( m => m.RankingPage)
  },
];
