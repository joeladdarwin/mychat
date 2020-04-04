import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { ForgotemailComponent } from './forgotemail/forgotemail.component';
const routes: Routes = [{path:'login', component:LoginComponent}, 
{ path: 'home', component: DashboardComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'forget', component: ForgotemailComponent },
{path:'**', component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
