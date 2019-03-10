import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { routing }      from './grafica-sensor.routing';

// This Module's Components
import { GraficaSensor } from './grafica-sensor.component';
import { MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing, MatCardModule
    ],
    declarations: [
        GraficaSensor
    ],
    exports: [
        GraficaSensor
    ]
})
export class GraficaSensorModule {

}
