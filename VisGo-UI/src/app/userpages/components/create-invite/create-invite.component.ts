import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { InviteService } from 'src/app/services/invite.service';


@Component({
  selector: 'app-create-invite',
  templateUrl: './create-invite.component.html',
  styleUrls: ['./create-invite.component.css']
})
export class CreateInviteComponent {

  inviteForm: FormGroup;

  constructor(private _fb : FormBuilder, 
    private _inviteService: InviteService, 
    private _dialogRef: DialogRef<CreateInviteComponent>,
    private router: Router,
    private toastr: ToastrService,
    private _authService: AuthService
    ){
    this.inviteForm = this._fb.group({
      name:'',
      email:'',
      date:'',
      time:'',
      number:'',
      purpose:'',
    })
  }

  onFormSubmit() {
    if (this.inviteForm.valid) {
      const invite = this.inviteForm.value;
      const username = this._authService.userID;

      this._authService.AddInviteToUser(invite, username).subscribe({
        next: (val: any) => {
          this.toastr.success('Created Invite Successfully');
          this._dialogRef.close();
          this.router.navigate(['/userPages/scheduled']).then(() => {
            location.reload();
          });
        },
        error: (err: any) => {
          console.error(err);
          this.toastr.error('Error occurred while adding invite.', 'error');
        }
      });
    }
  }
  
}
