import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from 'src/inicioSesion/inicioSesion.component';
import { MenuComponent } from 'src/menu/menu.component';
import { NewParcelComponent } from 'src/newParcel/newParcel.component';

const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'inicioSesion', component: InicioSesionComponent },
  { path: 'newParcel', component: NewParcelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ InicioSesionComponent, MenuComponent, NewParcelComponent ]
