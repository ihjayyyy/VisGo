import { Component } from '@angular/core';

@Component({
  selector: 'app-details-of-request-visits',
  templateUrl: './details-of-request-visits.component.html',
  styleUrls: ['./details-of-request-visits.component.css']
})
export class DetailsOfRequestVisitsComponent {
  notif: boolean = false
  clicked(){
    this.notif = !this.notif
    console.log(this.notif)
  }
}
