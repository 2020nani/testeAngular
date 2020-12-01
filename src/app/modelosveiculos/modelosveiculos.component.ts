/*
    Dados da pagina
   * Nome : Navita
   * Objetivo: Buscar modelos de veiculos da marca escolhida
   * Desenvolvedor: Hernani Almeida
   * data criacao: 29/11/2020
   
*/

import { Component, OnInit, Output } from '@angular/core';
import { MarcasVeiculosService } from '../marcasveiculos/marcasveiculos.service';

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

export class ModelosVeiculosComponent implements OnInit {
  
    id: [] = [];
    
    constructor(private marcaService: MarcasVeiculosService) { }

    ngOnInit(): void {
        this.x()

    }
    x():void{
        console.log(this.id);
    }
    /*
    Funcao que retorna um array de modelos e a marca escolhida 
    * parametro id: recebe o id escolhido e atraves do id faz uma requisicao na api
    * parametro nome: atualiza a constante marcaescolhida conforme o nome da marca escolhida
   
    modelos( id: string, nome: string ): void {
        
        this.veiculoid = id;
        this.marcaService.modelos( this.veiculoid ).subscribe({
            next: modelos => {
                this._modelos = modelos;
                this.marcaescolhida = nome;
                { this.viewModelos == false ? this.viewModelos = true : this.viewModelos = false };
                console.log(modelos, nome, this.viewModelos)
                
            },
            error: err => console.log('Error', err)
        })
    }
*/
}