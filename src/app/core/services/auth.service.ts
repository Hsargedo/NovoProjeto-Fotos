import { Injectable, computed, signal, inject } from '@angular/core';
import { email } from '@angular/forms/signals';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

type Usuario = {
    nome: string;
    email: string;
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private platformId = inject(PLATFORM_ID);
    private readonly chaveUsuario = 'chave-usuario';
    private readonly chaveToken = 'chave-token';    

    private usuario = signal<Usuario | null>(this.carregarUsuarioSalvo());
    private tokenJwt = signal<string | null>(this.carregarTokenSalvo());

    usuarioAtual = computed(() => this.usuario());
    estaLogado = computed(() => this.usuario() !== null && this.tokenJwt() !== null);
    token = computed(() => this.tokenJwt());

    login(nome:string, email: string, senha: string): boolean {
        if (!nome || !email || !senha) {
            return false;
        }
        
        const usuarioLogado: Usuario = {
            nome,
            email,
        };

        const tokenSimulado = 
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
        'eyJzdWIiOiJhbHVub0B0ZXN0ZS5jb20iLCJwZXJmaWwiOiJ1c3VhcmlvIn0.' +
        'assinatura-simulada';

        this.usuario.set({
            nome,
            email,
        });

        this.usuario.set(usuarioLogado);
        this.tokenJwt.set(tokenSimulado);

        this.salvarAutenticacao(usuarioLogado, tokenSimulado);

        return true;

    }

    logout() {
        this.usuario.set(null);
        this.tokenJwt.set(null);

        this.limparAutenticacao();
    }

    obterTokenJwt(): string | null {
        return this.tokenJwt();
    }

    private estaNoNavegador():boolean{
        return isPlatformBrowser(this.platformId);
    }

    private carregarUsuarioSalvo(): Usuario | null {
        if(!this.estaNoNavegador()){
            return null;
        }

        const dadosSalvos = localStorage.getItem(this.chaveUsuario);

        if(!dadosSalvos){
            return null;
        }
        
        try{
            return JSON.parse(dadosSalvos) as Usuario;
        }catch{
            return null;
        }
    }

    private carregarTokenSalvo(): string | null {
    if (!this.estaNoNavegador()) {
    return null;
    }
    return localStorage.getItem(this.chaveToken);
    }

    private salvarAutenticacao(usuario: Usuario, token: string){
        if(!this.estaNoNavegador()){
            return;
        }
        localStorage.setItem(this.chaveUsuario, JSON.stringify(this.usuario()));
        localStorage.setItem(this.chaveToken, token);
    }

    private limparAutenticacao(){
        if(!this.estaNoNavegador()){
            return;
        }
        localStorage.removeItem(this.chaveUsuario);
        localStorage.removeItem(this.chaveToken);   
    }
}