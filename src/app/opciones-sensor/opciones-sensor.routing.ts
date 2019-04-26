import { Routes, RouterModule }  from '@angular/router';


import { OpcionesSensor } from './opciones-sensor.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: OpcionesSensor,
    children: [
      //{ path: 'childview', component: ChildViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
// if it has child use routing below
//export const routing = RouterModule.forChild(routes);

