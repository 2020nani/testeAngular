import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcasVeiculosComponent } from './marcasveiculos/marcasveiculos.component';
import { Error404Component } from './shared/components/Error404/error404.component';


const routes: Routes = [
  /* redireciona para rota marcas*/
  { 
    path: '', 
    redirectTo: 'marcas',
    pathMatch: 'full'
    
  },
  /* habilita componente escolhido para rota marcas */
  { 
    path: 'marcas', 
    component: MarcasVeiculosComponent 
  },
  /* caso usuario acesse rota desconhecida na pagina e encaminhado para esta rota de erro */
  {
    path: '**', component: Error404Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
