import { Component, signal, computed, effect } from '@angular/core';
import { Foto } from '../foto/foto';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export interface FotoPortfolio {
  id: number;
  categoria: string;
  url: string;
  titulo: string;
}

@Component({
  selector: 'app-catalogo-fotos',
  imports: [Foto, MatButtonModule, MatCardModule],
  templateUrl: './catalogo-fotos.html',
  styleUrl: './catalogo-fotos.css',
})

export class CatalogoFotos {

  categorias = ['todos', 'praia', 'casamentos', 'formaturas', 'festas', 'animais', 'natureza'];
  categoriaAtiva = signal<string>('todos');

  fotos = signal<FotoPortfolio[]>([
      { id: 1, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80', categoria: 'praia', titulo: 'Brisa de Trancoso' },
      { id: 2, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80', categoria: 'casamento', titulo: 'Sim de Ouro' },
      { id: 3, url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80', categoria: 'formatura', titulo: 'A Grande Conquista' },
      { id: 4, url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80', categoria: 'festa', titulo: 'Luzes da Noite' },
      { id: 5, url: 'https://images.unsplash.com/photo-1475809938514-043971a85c3c?auto=format&fit=crop&w=400&q=80', categoria: 'animai', titulo: 'Onça ' },
      { id: 6, url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&q=80', categoria: 'natureza', titulo: 'Coração Verde' }
    ]);

    fotosFiltradas = computed(() => {
    const categoria = this.categoriaAtiva();
    if(categoria === 'todos') {
      return this.fotos();
    }
    return this.fotos().filter(f => f.categoria === categoria);
  });

  filtrar(categoria: string) {
    this.categoriaAtiva.set(categoria);
  }
  


}
