import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  accType = sessionStorage.getItem('accountType');
  Host:boolean = false
  Visitor: boolean = false
  
  ngOnInit(): void {
    this.aType()
 };
  aType(){
    if(this.accType === 'Host')
    {
      this.Host = true;
    }
    else
    {
      this.Visitor = true;
    }
  }
}
