import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { OrcamentoService } from '../../core/services/orcamento.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {
  public orcamentoService = inject(OrcamentoService);

  contatosFotografo = {
    whatsapp: "+55 (11) 99888-7766",
    email: "contato@oasisphotography.com.br",
    redes: "@oasis.photography"
  };

  testarReset(): void {
    this.orcamentoService.resetarEstado();
  }
}