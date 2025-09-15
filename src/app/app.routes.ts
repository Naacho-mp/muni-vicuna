import { Routes } from '@angular/router';
import { Contacto } from './pages/contacto/contacto';
import { Home } from './pages/home/home';
import { Turismo } from './pages/turismo/turismo';
import { SecplanComponent } from './pages/secplan/secplan';


export const routes: Routes = [
  {path: '', component: Home},
  {path: 'contact', component: Contacto},
  {path: 'tourism', component: Turismo},
  {path: 'secplan', component: SecplanComponent},
];
