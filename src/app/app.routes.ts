import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent: () => import('./features/home/home/home').then((m) => m.Home)},
    {path:'catalogofotos', loadComponent: () => import('./features/fotos/catalogo-fotos/catalogo-fotos').then((m) => m.CatalogoFotos)},
    {path:'login', loadComponent: () => import('./features/login/login/login').then((m) => m.Login)},

    {path:'**', redirectTo:""}
];
