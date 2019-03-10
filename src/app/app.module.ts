import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from '../registro/registro.component';
import { TratamientoComponent } from '../tratamiento/tratamiento.component';
import { MovimientoComponent } from '../movimiento/movimiento.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{ MaterialModule, MatNativeDateModule} from '@angular/material';

import{ MatDatepickerModule} from '@angular/material/datepicker';
import{ MatButtonModule} from '@angular/material/button';
import{ MatCardModule} from '@angular/material/card';
import{ MatIconModule} from '@angular/material/icon';
import{ MatInputModule} from '@angular/material/input';
import{ MatTabsModule} from '@angular/material/tabs';
import{ MatMomentDateModule} from '@angular/material-moment-adapter';


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
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatNativeDateModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
