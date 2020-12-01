/*
    Dados da pagina
   * Nome : Navita
   * Objetivo: Buscar modelos de veiculos da marca escolhida
   * Desenvolvedor: Hernani Almeida
   * data criacao: 29/11/2020
   
*/

import { Component } from '@angular/core';


/*
    
   * selector: nome de como sera passado a tag para exportar componente
   * templateUrl: local do arquivo em html que o componente ira mostrar na pagina
   * styleUrls: local do arquivo utilizado para estilizar a pagina html do componente
   
   
*/

@Component({
    selector: 'app-modelosveiculos',
    templateUrl: './marcasveiculos.component.html',
    styleUrls: ['./marcasveiculos.component.css']
})

export class ModelosVeiculosComponent  {
    /*
    constantes utilizadas pelo componente  
    */
    
    _modelos: any = [];
  

}