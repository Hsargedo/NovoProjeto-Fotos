import { Routes } from '@angular/router';

export const routes: Routes = [
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
  { path: '**', redirectTo: 'sobre' }
];