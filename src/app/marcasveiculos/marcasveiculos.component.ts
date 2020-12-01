/*
    Dados da pagina
   * Nome : Navita
   * Objetivo: Buscar modelos de veiculos da marca escolhida
   * Desenvolvedor: Hernani Almeida
   * data criacao: 29/11/2020
   
*/

import { Component, OnInit } from '@angular/core';
import { Marcas } from './../shared/models/marcasveiculos';
import { VeiculosService } from '../core/veiculos.service';

/*
    
   * selector: nome de como sera passado a tag para exportar componente
   * templateUrl: local do arquivo em html que o componente ira mostrar na pagina
   * styleUrls: local do arquivo utilizado para estilizar a pagina html do componente
   
   
*/

@Component({
    selector: 'app-marcasveiculos',
    templateUrl: './marcasveiculos.component.html',
    styleUrls: ['./marcasveiculos.component.css']
})

export class MarcasVeiculosComponent implements OnInit {
    /*
    constantes utilizadas pelo componente  
    */
    _marcas: Marcas[] = [];
    _modelos: any = [];
     marcaescolhida: string = "";
    veiculoid: string = '';
    viewModelos: boolean = false;

    /*
    construtor que chama o servico passado pela funcao em marcasveiculos.service.ts 
    */

    constructor(private veiculosService: VeiculosService) { }

    ngOnInit(): void {
        this.marcas();

    }
    /*
    retorna um array de marcas atraves de uma requisicao na api
   */
    marcas(): void {
        this.veiculosService.marcas().subscribe({
            next: marcas => {
                this._marcas = marcas;
                console.log(marcas)
            },
            error: err => console.log('Error', err)
        })
    }
    /*
    Funcao que retorna codigo e nome dos modelos da marca escolhida 
    * parametro id: recebe o codigo escolhido 
    * parametro nome: atualiza a constante marcaescolhida conforme o nome da marca escolhida
   */
    modeloescolhido( id: string, nome: string ): void {
        
        this.veiculoid = id;
        this.marcaescolhida = nome;
        { this.viewModelos == false ? this.viewModelos = true : this.viewModelos = false };
                
                
    }

}