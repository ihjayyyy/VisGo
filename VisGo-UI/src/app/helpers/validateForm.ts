import { FormControl, FormGroup } from "@angular/forms";

export default class ValidateForm{
    static validateAllFormFields(formGroup:FormGroup){
        Object.keys(formGroup.controls).forEach(field=>{
          const control = formGroup.get(field);
          console.log(control)
          if(control instanceof FormControl){
            control.markAsDirty({onlySelf:true})
          }
          else if(control instanceof FormGroup){
            this.validateAllFormFields(control)
          }
        })
      }
}