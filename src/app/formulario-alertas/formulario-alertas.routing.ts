import { Routes, RouterModule }  from '@angular/router';


import { FormularioAlertas } from './formulario-alertas.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: FormularioAlertas,
    children: [
      //{ path: 'childview', component: ChildViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
// if it has child use routing below
//export const routing = RouterModule.forChild(routes);

