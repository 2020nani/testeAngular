import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Marcas, Modelos } from './marcasveiculos';

@Injectable({
    providedIn: 'root'
})

export class MarcasVeiculosService {
    private marcasUrl: string = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
    

    constructor(private httpClient: HttpClient){}

    marcas(): Observable<Marcas[]> {
        return this.httpClient.get<Marcas[]>(this.marcasUrl)
    }
    modelos( id : number): Observable<Modelos[]> {
        return this.httpClient.get<Modelos[]>(`${this.marcasUrl}/${id}/modelos`)
    }
}