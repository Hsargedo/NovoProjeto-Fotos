import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { OrcamentoService } from '../../../core/services/orcamento.service';


@Component({
  selector: 'app-header',
  imports: [RouterLink, MatToolbarModule, MatButtonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public orcamentoService = inject(OrcamentoService);
}
