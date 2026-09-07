import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './shared/layouts/header/header';
import { CatalogoFotos } from './features/fotos/catalogo-fotos/catalogo-fotos';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterLink, Header, CatalogoFotos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Oásis Photography');
}
