import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { routing }      from './dashboard.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { GraficaSensor } from '../grafica-sensor/grafica-sensor.component';

// This Module's Components
import { Dashboard } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing, BrowserAnimationsModule, MatToolbarModule, MatCardModule
    ],
    declarations: [
        Dashboard, GraficaSensor
    ],
    exports: [
        Dashboard
    ]
})
export class DashboardModule {

}
