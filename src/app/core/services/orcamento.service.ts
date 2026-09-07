import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { computed } from '@angular/core';

export interface DadosOrcamento { 
    nome: string | null; 
    email: string | null;
    tipoAlbum?: string | null;
    mensagem: string | null;
}

@Injectable({
    providedIn: 'root'
})

export class OrcamentoService {
    private _orcamentoEnviado = signal<boolean>(false);

    public contatoLiberado = computed(() => this._orcamentoEnviado());

    private _dadosOrcamento = signal<DadosOrcamento | null>(null);
    public dadosOrcamento = computed(() => this._dadosOrcamento());

    constructor() {
        if (typeof window !== 'undefined' && window.localStorage) {
            const saved = localStorage.getItem('oasis_orcamento_enviado');
            if(saved === 'true') {
                this._orcamentoEnviado.set(true);
            }
        }
    }

    enviarOrcamento(dados: DadosOrcamento): void {
        this._dadosOrcamento.set(dados);
        this._orcamentoEnviado.set(true);

        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('oasis_orcamento_enviado', 'true');
        }
        console.log('Orçamento recebido com sucesso no Oásis Photography!', dados);
    }

    resetarEstado(): void {
        this._orcamentoEnviado.set(false);
        this._dadosOrcamento.set(null);
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.removeItem('oasis_orcamento_enviado');
        }
        console.log('Estado do orçamento resetado com sucesso no Oásis Photography!');
    }
}