import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ConfirmPassword } from '../validators/confirm-password';
import { UniqueUser } from '../validators/unique-user';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


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
      Validators.minLength(7),
      Validators.maxLength(25),
    ]),

    passwordConfirm:new FormControl('',
    [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(25),

    ]),
    // email:new FormControl('',
    // [
    //   Validators.required,
    //   Validators.email
    // ]),


  }, { validators: [this.confirmPassword.validate]
    });

  constructor(
    private authService:AuthService,
    private confirmPassword:ConfirmPassword,
    private uniqueUser: UniqueUser,
    private router:Router,

  ) { }


  users:User[];
  user:User;

  onSubmit(f:NgForm) {

    console.log(this.registrationForm.value);
    if (this.registrationForm.valid){

      this.authService.getUsers().subscribe((users)=> {
        this.users = users;
      });

      this.authService.createUser(this.registrationForm.value).subscribe(response => {
        this.users.push(response)
        this.authService.authenticateUser(this.registrationForm.value.username);
      });

      this.router.navigateByUrl('/');

    } else {
      console.log("invalid form");
      console.log(f.errors);
    }

  }


  ngOnInit(): void {
    if (localStorage.getItem('signedIn')) {
      this.router.navigateByUrl('/')
    }
    this.authService.getUsers().subscribe((users)=> {    // subscribe to observable is like .then()
      this.users = users;
    });
  }

}
