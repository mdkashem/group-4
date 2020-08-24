import { FormGroup, Validator } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmPassword implements Validator {

  validate(formGroup:FormGroup) {
    const {password, passwordConfirm} = formGroup.value;
    if(password === passwordConfirm) {
      return null
    } else {
      console.log('dont match');

      return { passwordConfirmed: false}
    }

  }
}
