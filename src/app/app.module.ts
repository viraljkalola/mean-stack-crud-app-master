import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegComponent } from './components/reg/reg.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegLoginComponent } from './components/reg-login/reg-login.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    RegComponent,
    LoginComponent,
    HomeComponent,
    RegLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
