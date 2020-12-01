/*
    Dados da pagina
   * Nome : Navita
   * Objetivo: Buscar modelos de veiculos da marca escolhida
   * Desenvolvedor: Hernani Almeida
   * data criacao: 29/11/2020
   
*/

import { Component, Input } from '@angular/core';
import { VeiculosService } from '../core/veiculos.service';

/*
    
   * selector: nome de como sera passado a tag para exportar componente
   * templateUrl: local do arquivo em html que o componente ira mostrar na pagina
   * styleUrls: local do arquivo utilizado para estilizar a pagina html do componente
   
   
*/

@Component({
    selector: 'app-modelosveiculos',
    templateUrl: './modelosveiculos.component.html',
    styleUrls: ['./modelosveiculos.component.css']
})

export class ModelosVeiculosComponent  {
    /*
    constantes utilizadas pelo componente  
    */
    @Input() viewmodelos: boolean = false;
    _modelos: [] = [];
    @Input() veiculoid: string = '';
  
    constructor(private veiculosService: VeiculosService) { }

    ngOnInit(): void {
        this.modelos( );

    }
  
    /*
    Funcao que retorna um array de modelos e a marca escolhida 
    * parametro id: recebe o id escolhido e atraves do id faz uma requisicao na api
    * parametro nome: atualiza a constante marcaescolhida conforme o nome da marca escolhida
   */
    modelos( ): void {
        this.veiculosService.modelos( this.veiculoid ).subscribe({
            next: modelos => {
                this._modelos = modelos.modelos;
        
            },
            error: err => console.log('Error', err)
        })
        console.log(this.veiculoid)
    }
}