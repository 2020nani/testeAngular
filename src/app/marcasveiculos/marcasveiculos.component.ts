import { Component, OnInit } from '@angular/core';
import { Marcas, Modelos } from './marcasveiculos';
import { MarcasVeiculosService } from './marcasveiculos.service';


@Component({
  selector: 'app-marcasveiculos',
  templateUrl: './marcasveiculos.component.html',
  styleUrls: ['./marcasveiculos.component.css']
})

export class MarcasVeiculosComponent implements OnInit {
    _marcas: Marcas[] = [];
    _modelos: Modelos[] = [];
    veiculoid : number = 0;
    viewModelos : boolean = false
    constructor(private marcaService: MarcasVeiculosService) { }

    ngOnInit(): void { 
        this.marcas();
    }
    marcas(): void { 
        this.marcaService.marcas().subscribe({
            next: marcas => {
                this._marcas = marcas;
              console.log(marcas)  
            },
            error: err => console.log('Error', err) 
        })
    }
    modelos( id: number): void { 
        
        this.veiculoid = id;
        this.marcaService.modelos(this.veiculoid).subscribe({
            next: modelos => {
                this._modelos = modelos;
                {this.viewModelos == false ? this.viewModelos = true : this.viewModelos = false} ;
              console.log(modelos, this.viewModelos)  
            },
            error: err => console.log('Error', err) 
        })
    }
}