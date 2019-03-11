import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { routing }      from './opciones-sensor.routing';

// This Module's Components
import { OpcionesSensor } from './opciones-sensor.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        OpcionesSensor
    ],
    exports: [
        OpcionesSensor
    ]
})
export class OpcionesSensorModule {

}
