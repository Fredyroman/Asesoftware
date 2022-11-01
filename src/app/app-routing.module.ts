import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTurnosComponent } from './lista-turnos/lista-turnos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'api/turnos', component:ListaTurnosComponent},
  {path : '', redirectTo:'api/turnos', pathMatch: 'full'},
  {path : 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




