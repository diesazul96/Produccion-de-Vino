import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from '../registro/registro.component';
import { TratamientoComponent } from '../tratamiento/tratamiento.component';
import { MovimientoComponent } from '../movimiento/movimiento.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import{MatNativeDateModule} from '@angular/material';
=======
import{ MatNativeDateModule} from '@angular/material';
>>>>>>> 6c18956d66f553b96f6d5a761cbfed2d4db80096

import{ MatDatepickerModule} from '@angular/material/datepicker';
import{ MatInputModule} from '@angular/material/input';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    TratamientoComponent,
    MovimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
