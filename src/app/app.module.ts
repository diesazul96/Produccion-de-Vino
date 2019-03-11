import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioAlertas } from './formulario-alertas/formulario-alertas.component';
import { OpcionesSensor } from './opciones-sensor/opciones-sensor.component';
import { Routes, RouterModule } from '@angular/router';
import { GraficaSensor } from './grafica-sensor/grafica-sensor.component';
import { Dashboard } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatButtonToggleModule, MatSlideToggleModule } from '@angular/material';

const appRoutes: Routes = [
  {path: 'opciones-sensor', component: OpcionesSensor}
];

@NgModule({
  declarations: [
    AppComponent, Dashboard, GraficaSensor, OpcionesSensor, FormularioAlertas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatButtonToggleModule, MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
