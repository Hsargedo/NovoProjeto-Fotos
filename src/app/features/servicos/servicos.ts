import { Component, inject, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { OrcamentoService } from '../../core/services/orcamento.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicos',
  imports: [RouterLink], 
  templateUrl: './servicos.html',
  styleUrl: './servicos.css',
})
export class Servicos {
  private orcamentoService = inject(OrcamentoService);
  private router = inject(Router);

  albuns = ['Praia & Litoral', 'Casamentos & Noivados', 'Formaturas & Acadêmicos', 'Festas & Eventos', 'Animais de Estimação', 'Natureza & Paisagens'];
  sucessoEnviado = signal<boolean>(false);

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tipoAlbum: new FormControl('', [Validators.required]),
    mensagem: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  submeter(): void {
    if (this.formulario.valid) {
      const dados = {
        nome: this.formulario.get('nome')?.value || '',
        email: this.formulario.get('email')?.value || '',
        tipoAlbum: this.formulario.get('tipoAlbum')?.value || '',
        mensagem: this.formulario.get('mensagem')?.value || ''
      };

      this.orcamentoService.enviarOrcamento(dados);
      this.sucessoEnviado.set(true);
      this.formulario.reset();

      setTimeout(() => {
        this.router.navigate(['/contato']);
      }, 3000);
    } else {
      this.formulario.markAllAsTouched();

    }
  }
}