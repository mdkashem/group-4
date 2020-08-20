import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmPassword } from '../validators/confirm-password';
import { User } from '../user';
import { ApiService } from '../api.service';

// import { UniqueUser } from '../validators/unique-user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {



  @Output() createUser = new EventEmitter<any>();

  registrationForm = new FormGroup({

    username:new FormControl('',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password:new FormControl('',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(25),
    ]),

    passwordConfirm:new FormControl('',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(25),

    ]),
    // email:new FormControl('',
    // [
    //   Validators.required,
    //   Validators.email
    // ]),


  }, { validators: [this.confirmPassword.validate] });

  constructor(
    private apiService:ApiService,
    private confirmPassword:ConfirmPassword,
    // private  uniqueUser:UniqueUser
  ) { }


  users:User[];

  onSubmit() {
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid){
      
      this.registrationForm.removeControl('passwordConfirm');

      this.apiService.getUsers().subscribe((users)=> { // subscribe to observable is like .then()
        this.users = users;
      });

      this.apiService.createUser(this.registrationForm.value).subscribe(response => {



        this.users.push(response)
        console.log(response);

        console.log(this.users);
      })

      //this.createUser.emit(this.registrationForm.value)

    } else {
      alert(this.registrationForm.errors)
    }

  }


  ngOnInit(): void {
    this.apiService.getUsers().subscribe((users)=> { // subscribe to observable is like .then()
      this.users = users;
    });
  }

}
