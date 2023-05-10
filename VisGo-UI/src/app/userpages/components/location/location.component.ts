import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  daily: boolean = false;
  monthly: boolean = true;

  selected(){
    this.daily = !this.daily;
    this.monthly = !this.monthly;
  }
}
