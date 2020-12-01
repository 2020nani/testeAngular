import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcasVeiculosComponent } from './marcasveiculos/marcasveiculos.component';
import { ModelosVeiculosComponent } from './modelosveiculos/modelosveiculos.component';

const routes: Routes = [
  
  { 
    path: '', 
    component: MarcasVeiculosComponent 
  },
  { 
    path: 'modelos', 
    component: ModelosVeiculosComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
