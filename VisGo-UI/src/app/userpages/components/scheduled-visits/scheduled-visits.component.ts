import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scheduled-visits',
  templateUrl: './scheduled-visits.component.html',
  styleUrls: ['./scheduled-visits.component.css']
})
export class ScheduledVisitsComponent {
  public currentDate = this.datePipe.transform(new Date(),"yyyy-MM-dd")
  public currentMonth = this.datePipe.transform(new Date(),"yyyy-MM")
  daily: boolean = false;
  monthly: boolean = true;

  Dselected() {
    this.daily = true;
    this.monthly = false;
  }

  Mselected() {
    this.monthly = true;
    this.daily = false;
  }
  
constructor(private datePipe:DatePipe){}
}
