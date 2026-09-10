import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { Component } from '@angular/core';


export const routes: Routes = [
  
  {path: '', redirectTo:'home', pathMatch:'full'},

  {
  path:'home',
  loadComponent: () => import('./features/home/home/home').then((m) => m.Home)
  },
  {
    path: 'orcamento',
    canActivate: [authGuard],
    loadComponent: () => import('./features/orcamento/orcamento').then(m => m.Orcamento)
  },
  {
    path: 'contato',
    canActivate: [authGuard],
    loadComponent: () => import('./features/contato/contato').then(m => m.Contato)
  },
  {
  path:'catalogo-fotos',
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
