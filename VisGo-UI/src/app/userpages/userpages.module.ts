import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserPagesComponent } from './userpages.component';
import { RouterModule } from '@angular/router';
import { UserPagesRoutingModule } from './userpages-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { LogbookComponent } from './components/logbook/logbook.component';
import { ScheduledVisitsComponent } from './components/scheduled-visits/scheduled-visits.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PendingComponent } from './components/pending/pending.component';
import { LocationComponent } from './components/location/location.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateInviteComponent } from './components/create-invite/create-invite.component';
import { DetailsOfVisitsComponent } from './components/details-of-visits/details-of-visits.component';
import { DetailsOfScheduledVisitsComponent } from './components/details-of-scheduled-visits/details-of-scheduled-visits.component';
import { DetailsOfRequestVisitsComponent } from './components/details-of-request-visits/details-of-request-visits.component';
import { LocationTrackingComponent } from './components/location-tracking/location-tracking.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [
    UserPagesComponent,
    HeaderComponent,
    LogbookComponent,
    ScheduledVisitsComponent,
    DashboardComponent,
    PendingComponent,
    LocationComponent,
    ProfileComponent,
    NavbarComponent,
    CreateInviteComponent,
    DetailsOfVisitsComponent,
    DetailsOfScheduledVisitsComponent,
    DetailsOfRequestVisitsComponent,
    LocationTrackingComponent,
    NotificationsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserPagesRoutingModule,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers:[DatePipe]
})
export class UserPagesModule{ }
