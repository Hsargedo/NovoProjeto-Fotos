import { Injectable, computed, signal } from '@angular/core';

type Usuario = {
    nome: string;
    email: string;
    perfil: "usuario";
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private usuario = signal<Usuario | null>(null);
    private tokenJwt = signal<string | null>(null);

    usuarioAtual = computed(() => this.usuario());
    estaLogado = computed(() => this.usuario() !== null);
    token = computed(() => this.tokenJwt());

    login(nome:string, email: string, senha: string): boolean {
        if (!nome || !email || !senha) {
            return false;
        }
    

        const tokenSimulado = 
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
        'eyJzdWIiOiJhbHVub0B0ZXN0ZS5jb20iLCJwZXJmaWwiOiJ1c3VhcmlvIn0.' +
        'assinatura-simulada';

        this.usuario.set({
            nome,
            email,
            perfil: 'usuario',
        });

        this.tokenJwt.set(tokenSimulado);

        return true;

    }

    logout() {
        this.usuario.set(null);
        this.tokenJwt.set(null);
    }

    obterTokenJwt(): string | null {
        return this.tokenJwt();
    }
}