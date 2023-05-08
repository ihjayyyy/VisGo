import { Component } from '@angular/core';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css']
})
export class LogbookComponent {
  daily: boolean = false;
  monthly: boolean = true;

  selected(){
    this.daily = !this.daily;
    this.monthly = !this.monthly;
  }
}
