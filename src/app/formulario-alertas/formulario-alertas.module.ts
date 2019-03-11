import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { routing }      from './formulario-alertas.routing';

// This Module's Components
import { FormularioAlertas } from './formulario-alertas.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        FormularioAlertas
    ],
    exports: [
        FormularioAlertas
    ]
})
export class FormularioAlertasModule {

}
