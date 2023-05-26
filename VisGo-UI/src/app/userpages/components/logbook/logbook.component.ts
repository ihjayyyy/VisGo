import { DatePipe } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css']
})
export class LogbookComponent {
  public currentDate = this.datePipe.transform(new Date(),"yyyy-MM-dd")
  public currentMonth = this.datePipe.transform(new Date(),"yyyy-MM")
  daily: boolean = false;
  monthly: boolean = true;
  notif: boolean = false
  
  clicked(){
    this.notif = !this.notif
    console.log(this.notif)
  }
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
