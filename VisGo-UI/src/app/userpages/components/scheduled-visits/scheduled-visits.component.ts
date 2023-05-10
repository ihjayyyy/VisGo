import { Component } from '@angular/core';

@Component({
  selector: 'app-scheduled-visits',
  templateUrl: './scheduled-visits.component.html',
  styleUrls: ['./scheduled-visits.component.css']
})
export class ScheduledVisitsComponent {
  daily: boolean = false;
  monthly: boolean = true;

  selected(){
    this.daily = !this.daily;
    this.monthly = !this.monthly;
  }
}
