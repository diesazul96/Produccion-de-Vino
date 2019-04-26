import { MovimientoComponent } from './../movimiento/movimiento.component';
import { TratamientoComponent } from './../tratamiento/tratamiento.component';
import { OpcionesSensor } from './opciones-sensor/opciones-sensor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from 'src/inicioSesion/inicioSesion.component';
import { MenuComponent } from 'src/menu/menu.component';
import { NewParcelComponent } from 'src/newParcel/newParcel.component';
import { Dashboard } from './dashboard';
import { RegistroComponent } from 'src/registro/registro.component';

const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'inicioSesion', component: InicioSesionComponent },
  { path: 'newParcel', component: NewParcelComponent },
  { path: 'dashboard/:name', component: Dashboard },
  { path: 'opsSensor', component: OpcionesSensor },
  { path: 'registro', component: RegistroComponent },
  { path: 'tratamiento', component: TratamientoComponent },
  { path: 'movimiento', component: MovimientoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ InicioSesionComponent, MenuComponent, NewParcelComponent ]
