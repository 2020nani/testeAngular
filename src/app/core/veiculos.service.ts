/*
    Dados da pagina
   * Nome : Navita
   * Objetivo: Buscar modelos de veiculos da marca escolhida
   * Desenvolvedor: Hernani Almeida
   * data criacao: 29/11/2020
   
*/

import { Marcas } from '../shared/models/marcasveiculos';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class VeiculosService {
    /*
       url da api tabela fipe
    */
    private marcasUrl: string = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';


    constructor(private httpClient: HttpClient) { }
    /*
     funcao que ao ser chamada retorna um array de marcas atraves de uma requisicao na api
    */
    marcas(): Observable<Marcas[]> {
        return this.httpClient.get<Marcas[]>(this.marcasUrl)
    }

    /*
     funcao que ao ser chamada retorna um array de modelos conforme o parametro id passado
    */
    modelos(id: string): Observable<any> {
        return this.httpClient.get<any>(`${this.marcasUrl}/${id}/modelos`)
    }
}