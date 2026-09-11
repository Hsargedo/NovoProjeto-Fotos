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

  categorias = ['todos', 'casamentos', 'gestantes', 'família', 'corporativo', 'eventos', 'infantil'];
  categoriaAtiva = signal<string>('todos');

  pesquisa = signal<string>('');
  fotoSelecionada = signal<FotoPortfolio | null>(null);


  fotos = signal<FotoPortfolio[]>([
      { id: 1,
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90byUyMGRlJTIwY2FzYW1lbnRvfGVufDB8fDB8fHww', 
        categoria: 'casamentos', 
        titulo: 'Sim de Ouro' 
      },
      { id: 2, 
        url: 'https://plus.unsplash.com/premium_photo-1683121240815-c9f929b2539e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm90byUyMGRlJTIwZW5zYWlvJTIwZGUlMjBnZXN0YW50ZXxlbnwwfHwwfHx8MA%3D%3D', 
        categoria: 'gestantes', 
        titulo: 'Ensaio de gestante' 
      },
      { id: 3, 
        url: 'https://plus.unsplash.com/premium_photo-1681911453240-868b65588bde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm90byUyMGRlJTIwZmFtaWxpYXxlbnwwfHwwfHx8MA%3D%3D', 
        categoria: 'família', 
        titulo: 'Momento alegre em família' 
      },
      { id: 4,
        url: 'https://media.istockphoto.com/id/2218333101/pt/foto/confident-mature-man-smiling-in-professional-attire-with-a-calm-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=HH-Ayh6H5LQoc4WdEkOBZ-M0i2ueTcMsZj2smEOBYIc=', 
        categoria: 'corporativo', 
        titulo: 'Profissional confiante'
      },
      { id: 5,
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90byUyMGRlJTIwZm9ybWF0dXJhYXxlbnwwfHwwfHx8MA%3D%3D', 
        categoria: 'eventos', 
        titulo: 'Formatura universitária' 
      },
      { id: 6,
        url: 'https://media.istockphoto.com/id/1268675353/pt/foto/portrait-of-cute-little-girl-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=KC1s0YUgusC_MyMsrxOGLjinpcaFaue2LgdZc0ciFNE=', 
        categoria: 'infantil', 
        titulo: 'Criança sorridente ao ar livre' 
      }
    ]);

      fotosFiltradas = computed(() => {
        const categoria = this.categoriaAtiva();

        const texto = this.pesquisa()
            .toLowerCase()
            .trim();

        return this.fotos().filter(foto => {
            const pertenceCategoria =
                categoria === 'todos' ||
                foto.categoria === categoria;

            const correspondePesquisa =
                foto.titulo.toLowerCase().includes(texto) ||
                foto.categoria.toLowerCase().includes(texto);

            return pertenceCategoria && correspondePesquisa;
        });
    });


    filtrar(categoria: string) {
        this.categoriaAtiva.set(categoria);
    }

    pesquisar(evento: Event) {
        const input = evento.target as HTMLInputElement;

        this.pesquisa.set(input.value);
    }

}


