import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLogInComponent } from './auth/components/admin-log-in/admin-log-in.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { UserPagesModule } from './userpages/userpages.module';
import { AdminDashboardComponent } from './userpages/admin-components/admin-dashboard/admin-dashboard.component';
import { AdminLogbookComponent } from './userpages/admin-components/admin-logbook/admin-logbook.component';
import { AdminDeleteReportComponent } from './userpages/admin-components/admin-delete-report/admin-delete-report.component';
import { AdminDeleteUserComponent } from './userpages/admin-components/admin-delete-user/admin-delete-user.component';
import { AdminDetailsOfVisitComponent } from './userpages/admin-components/admin-details-of-visit/admin-details-of-visit.component';
import { AdminNewUserComponent } from './userpages/admin-components/admin-new-user/admin-new-user.component';
import { AdminProfileComponent } from './userpages/admin-components/admin-profile/admin-profile.component';
import { AdminReportDetailsComponent } from './userpages/admin-components/admin-report-details/admin-report-details.component';
import { AdminReportsComponent } from './userpages/admin-components/admin-reports/admin-reports.component';
import { AdminScheduledVisitDetailsComponent } from './userpages/admin-components/admin-scheduled-visit-details/admin-scheduled-visit-details.component';
import { AdminScheduledVisitsComponent } from './userpages/admin-components/admin-scheduled-visits/admin-scheduled-visits.component';
import { AdminSystemManagementComponent } from './userpages/admin-components/admin-system-management/admin-system-management.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLogInComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminLogbookComponent,
    AdminDeleteReportComponent,
    AdminDeleteUserComponent,
    AdminDetailsOfVisitComponent,
    AdminNewUserComponent,
    AdminProfileComponent,
    AdminReportDetailsComponent,
    AdminReportsComponent,
    AdminScheduledVisitDetailsComponent,
    AdminScheduledVisitsComponent,
    AdminSystemManagementComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
