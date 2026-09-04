import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);


  erroLogin = signal(false);


  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  entrar() {
    this.erroLogin.set(false);

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const nome = this.formulario.value.nome ?? '';
    const email = this.formulario.value.email ?? '';
    const senha = this.formulario.value.senha ?? '';

    const loginRealizado = this.authService.login(nome, email, senha);

    if (!loginRealizado) {
      this.erroLogin.set(true);
      return;
    }

    this.router.navigateByUrl('/fotos');
  }
}
