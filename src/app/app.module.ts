import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from '../inicioSesion/inicioSesion.component';
import { MenuComponent } from '../menu/menu.component';
import { NewParcelComponent } from '../newParcel/newParcel.component';

@NgModule({
  declarations: [
    AppComponent, InicioSesionComponent, MenuComponent, NewParcelComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
