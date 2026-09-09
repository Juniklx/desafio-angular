import { Routes } from '@angular/router';
import { Login } from '../../src/app/components/pages/login/login';
import { Home } from '../../src/app/components/pages/home/home';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login, canActivate: [guestGuard] },
    { path: 'home', component: Home, canActivate: [authGuard] },
    { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
];
