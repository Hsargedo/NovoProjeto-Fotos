import { Component, signal, computed, effect } from '@angular/core';
import { Foto } from '../foto/foto';

@Component({
  selector: 'app-catalogo-fotos',
  imports: [Foto],
  templateUrl: './catalogo-fotos.html',
  styleUrl: './catalogo-fotos.css',
})

export class CatalogoFotos {
  fotos = signal([
    {nome: "Fotos Casamento", preco: 800},
    {nome: "Fotos Festas", preco: 300},
    {nome: "Fotos Formatura", preco: 500},
    {nome: "Fotos Praia", preco: 610},
    {nome: "Fotos Animais", preco: 750},
  ]);

  totalFotos = computed(() => this.fotos().length);

  valorTotal = computed(() => {
    return this.fotos().reduce((total, item) => total + item.preco, 0);
  });


  exibirFoto(nome:string) {
    console.log("Foto selecionada:", nome);
  }

  adicionarFoto() {
    this.fotos.update(listaAtual => [
      ...listaAtual, 
      { nome: "Fotos Natureza", preco: 400}
    ]);
  }

  substituirFotos() {
    this.fotos.set([{ nome: "Foto NOVA", preco: 999}]);
  }


  constructor() {
    effect(() => {
      console.log("Lista de fotos alterada:", this.fotos());
    });

    effect(() => {
      console.log("Valor total atualizado:", this.valorTotal())
    });

    effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `(${this.totalFotos()}) Oásis Photography`;
      }
    });
  }


}
