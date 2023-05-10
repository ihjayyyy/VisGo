import { Component } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {
  daily: boolean = false;
  monthly: boolean = true;

  selected(){
    this.daily = !this.daily;
    this.monthly = !this.monthly;
  }
}
