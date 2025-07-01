import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  standalone: false,
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss'
})
export class FormContactComponent {

  formContact= new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl(''),
    message: new FormControl('', Validators.required)
  }, [this.isMisMatch]);

  isMisMatch(control: AbstractControl): ValidationErrors | null{
    if(control.get('email')?.value !== control.get('confirmEmail')?.value){
      return{emailMisMatch:true};
    }
    return null;
  }

  onSubmit(){
    console.log(this.formContact.value);
    this.formContact.reset();
  }

}
