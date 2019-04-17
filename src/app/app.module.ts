import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from '../registro/registro.component';
import { TratamientoComponent } from '../tratamiento/tratamiento.component';
import { MovimientoComponent } from '../movimiento/movimiento.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{MatNativeDateModule} from '@angular/material';

import{ MatDatepickerModule} from '@angular/material/datepicker';
import{ MatInputModule} from '@angular/material/input';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment} from '../environments/environment';


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
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
