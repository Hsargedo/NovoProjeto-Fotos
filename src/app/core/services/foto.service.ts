import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { FotoAleatoria } from "../models/foto";

type FotoApi = {
    id:string;
    urls:URLsApi;
};

type URLsApi = {
    full:string;
}

@Injectable({
    providedIn: 'root',
})

export class FotosService{
    private http = inject(HttpClient);
    private readonly API = 'https://api.unsplash.com/photos/random/?client_id=bjE8yRcMzRyH5zzxVPgzV8pDXJ11RpxwOVG_nFOQtfY&count=10';

    buscarFotos(){
        return this.http.get<FotoApi[]>(this.API);
    }
    transformarFotos(dados: FotoApi[]): FotoAleatoria[]{
        return dados.map((foto) => ({
            id: foto.id,
            url: foto.urls.full,
        }));
    } 
}