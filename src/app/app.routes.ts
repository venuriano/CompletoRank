import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'locales',
    loadComponent: () => import('./pages/locales/locales.page').then( m => m.LocalesPage),
    canActivate: [AuthGuard] // RUTA PROTEGIDA
  },
  {
    path: 'ranking',
    loadComponent: () => import('./pages/ranking/ranking.page').then( m => m.RankingPage),
    canActivate: [AuthGuard] // RUTA PROTEGIDA
  },
  {
    path: 'nueva-resena',
    loadComponent: () => import('./pages/nueva-resena/nueva-resena.page').then( m => m.NuevaResenaPage),
    canActivate: [AuthGuard] // RUTA PROTEGIDA
  }
];