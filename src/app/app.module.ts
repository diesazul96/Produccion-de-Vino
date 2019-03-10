import { GraficaSensor } from './grafica-sensor/grafica-sensor.component';
import { Dashboard } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, Dashboard, GraficaSensor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
