import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { UpperCasePipe } from '@angular/common'

@Component({
  selector: 'app-foto',
  imports: [PrecoFormatadoPipe, UpperCasePipe],
  templateUrl: './foto.html',
  styleUrl: './foto.css',
})
export class Foto {
  @Input() nome: string = "";
  @Input() preco: number = 0;
  @Output() fotoSelecionada = new EventEmitter<string>();

  selecionarFoto() {
    this.fotoSelecionada.emit(this.nome);
  }

}