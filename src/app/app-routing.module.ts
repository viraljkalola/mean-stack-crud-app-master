import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { RegComponent } from './components/reg/reg.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegLoginComponent } from './components/reg-login/reg-login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'reg-login' },
  { path: 'home', component: HomeComponent,
  children:[
    { path: 'employees-list', component: EmployeeListComponent },
    { path: 'edit-employee/:id', component: EmployeeEditComponent },
    { path: 'create-employee', component: EmployeeCreateComponent },
] },
  { path: 'reg-login', component: RegLoginComponent,
  children:[
    { path: 'register', component: RegComponent },
    { path: 'login', component: LoginComponent },
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
