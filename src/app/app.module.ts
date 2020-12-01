import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MarcasVeiculosComponent } from './marcasveiculos/marcasveiculos.component';
import { MaterialModule } from './shared/material/material.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ModelosVeiculosComponent } from './modelosveiculos/modelosveiculos.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MarcasVeiculosComponent,
    ModelosVeiculosComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
