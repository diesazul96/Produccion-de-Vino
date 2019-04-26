import { OpcionesSensor } from './../opciones-sensor/opciones-sensor.component';
import { Routes, RouterModule }  from '@angular/router';


import { Dashboard } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      //{ path: 'opciones-sensor', redirectTo: '/configSensor.html' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
// if it has child use routing below
//export const routing = RouterModule.forChild(routes);

