import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-details-of-visits',
  templateUrl: './details-of-visits.component.html',
  styleUrls: ['./details-of-visits.component.css']
})
export class DetailsOfVisitsComponent {
  constructor(private _authService: AuthService) {}
  logbookData: any;
  ngOnInit(): void {
     this.logbookData = this._authService.PassLogbookDatabyId();
    //  console.log(this.inviteData)
  };
}
