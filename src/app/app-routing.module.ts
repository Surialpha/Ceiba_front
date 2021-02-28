import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './componets/person/lista/lista.component';
import { CrearComponent } from './componets/person/crear/crear.component';

const routes: Routes = [
  { path: '', component: ListaComponent},
  { path: 'create', component: CrearComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
