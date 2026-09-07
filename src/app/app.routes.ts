import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [

  {
  path:'TESTE',
  loadComponent: () => import('./features/home/home/home').then((m) => m.Home)
  },
  { path: '', redirectTo: 'sobre', pathMatch: 'full' },
  {
    path: 'sobre',
    loadComponent: () => import('./features/sobre/sobre').then(m => m.Sobre)
  },
  {
    path: 'albuns',
    loadComponent: () => import('./features/albuns/albuns').then(m => m.Albuns)
  },
  {
    path: 'estudio',
    loadComponent: () => import('./features/estudio/estudio').then(m => m.Estudio)
  },
  {
    path: 'orcamento',
    loadComponent: () => import('./features/orcamento/orcamento').then(m => m.Orcamento)
  },
  {
    path: 'contato',
    loadComponent: () => import('./features/contato/contato').then(m => m.Contato)
  },
  { path: '**',
    redirectTo: 'sobre'
  },
  {
  path:'catalogofotos',
  canActivate: [authGuard],
  loadComponent: () => import('./features/fotos/catalogo-fotos/catalogo-fotos').then((m) => m.CatalogoFotos)
  },
  {
    path:'login',
    loadComponent: () => import('./features/login/login/login').then((m) => m.Login)
  },
  {
    path:'**',
    redirectTo:""
  }
];
