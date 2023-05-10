import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  url="../../../../assets/images/upload.jpg"

  onselectFile(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }

    }
  }
}
