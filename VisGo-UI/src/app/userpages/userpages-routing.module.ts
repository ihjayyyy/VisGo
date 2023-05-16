import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserPagesComponent } from './userpages.component';
import { LogbookComponent } from './components/logbook/logbook.component';
import { ScheduledVisitsComponent } from './components/scheduled-visits/scheduled-visits.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PendingComponent } from './components/pending/pending.component';
import { LocationComponent } from './components/location/location.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateInviteComponent } from './components/create-invite/create-invite.component';
import { DetailsOfVisitsComponent } from './components/details-of-visits/details-of-visits.component';
import { DetailsOfScheduledVisitsComponent } from './components/details-of-scheduled-visits/details-of-scheduled-visits.component';
import { DetailsOfRequestVisitsComponent } from './components/details-of-request-visits/details-of-request-visits.component';
import { LocationTrackingComponent } from './components/location-tracking/location-tracking.component';

const routes: Routes = [
  {
    path: 'userPages',component: UserPagesComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'logbook', component: LogbookComponent},
      {path:'scheduled',component: ScheduledVisitsComponent},
      {path:'pending', component:PendingComponent},
      {path:'location', component:LocationComponent},
      {path:'profile', component:ProfileComponent},
      {path:'create-invite', component:CreateInviteComponent},
      {path:'visits-details', component:DetailsOfVisitsComponent},
      {path:'scheduled-visits-details', component:DetailsOfScheduledVisitsComponent},
      {path:'request-visits-details', component:DetailsOfRequestVisitsComponent},
      {path:'location-tracking', component:LocationTrackingComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserPagesRoutingModule { }
