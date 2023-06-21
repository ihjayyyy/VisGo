import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLogInComponent } from './auth/components/admin-log-in/admin-log-in.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { UserPagesModule } from './userpages/userpages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr'
import {  HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { AdminDashboardComponent} from './userpages-admin/admin-components/admin-dashboard/admin-dashboard.component'
import { AdminDeleteReportComponent } from './userpages-admin/admin-components/admin-delete-report/admin-delete-report.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLogInComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminDeleteReportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserPagesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
