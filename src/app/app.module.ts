import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from '../registro/registro.component';
import { TratamientoComponent } from '../tratamiento/tratamiento.component';
import { MovimientoComponent } from '../movimiento/movimiento.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatButtonToggleModule, MatSlideToggleModule, MatListModule, MatListItem } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FormularioAlertas } from './formulario-alertas/formulario-alertas.component';
import { OpcionesSensor } from './opciones-sensor/opciones-sensor.component';
import { GraficaSensor } from './grafica-sensor/grafica-sensor.component';
import { Dashboard } from './dashboard/dashboard.component';
import { InicioSesionComponent } from '../inicioSesion/inicioSesion.component';
import { MenuComponent } from '../menu/menu.component';
import { NewParcelComponent } from '../newParcel/newParcel.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    TratamientoComponent,
    MovimientoComponent,
    Dashboard, GraficaSensor, OpcionesSensor, FormularioAlertas,
    InicioSesionComponent, MenuComponent, NewParcelComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatButtonToggleModule, MatSlideToggleModule, FormsModule, AngularFireModule.initializeApp(environment.firebase),
    MatListModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})

export class AppModule { }
