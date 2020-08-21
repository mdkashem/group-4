import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmPassword } from '../validators/confirm-password';
import { UniqueUser } from '../validators/unique-user';
import { User } from '../user';
import { AuthService } from '../auth.service';



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
    ], this.uniqueUser.validate),

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


  }, { validators: [
        this.confirmPassword.validate,

      ]
    });

  constructor(
    private authService:AuthService,
    private confirmPassword:ConfirmPassword,
    private uniqueUser: UniqueUser
  ) { }


  users:User[];

  foundUser:boolean

  onSubmit() {

    console.log(this.foundUser);
    console.log(this.registrationForm.value);

    if (this.registrationForm.valid){

      //this.registrationForm.removeControl('passwordConfirm');

      this.authService.getUsers().subscribe((foundUsers)=> {

        for (const user of foundUsers) {

          if (this.registrationForm.value.username == user.username) {
            this.foundUser = true;
            console.log(this.foundUser);

            alert("username already taken");

          }
        }
      });



      if (this.foundUser == false) {
        this.authService.createUser(this.registrationForm.value).subscribe(response => {

          this.users.push(response)
          console.log(response);
          console.log(this.users); // For testing purposes



        });
      }

      this.foundUser = false;
      console.log(this.foundUser);

    } else {
      alert("invalid form")
    }

  }


  ngOnInit(): void {
    this.authService.getUsers().subscribe((users)=> {    // subscribe to observable is like .then()
      this.users = users;
    });
  }

}
