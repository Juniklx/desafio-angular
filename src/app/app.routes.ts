import { Routes } from '@angular/router';
import { Login } from '../../src/app/components/pages/login/login';
import { Home } from '../../src/app/components/pages/home/home';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { PainelLayout } from './components/painel-layout/painel-layout';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login, canActivateChild: [guestGuard], data: { title: 'Login' } },
  {
    path: '',
    component: PainelLayout,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: Home, data: { title: 'Home' } },
      { path: 'dashboard', component: Dashboard, data: { title: 'Dashboard' } },
    ],
  },
];