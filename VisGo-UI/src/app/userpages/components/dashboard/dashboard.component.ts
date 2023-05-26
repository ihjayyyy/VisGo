import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  notif: boolean = false
  clicked(){
    this.notif = !this.notif
    console.log(this.notif)
  }

}
