import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({

    username:new FormControl('',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
    ]),
    password:new FormControl('',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(25),
    ])

  });

  constructor(
    private authService:AuthService,
  ) { }


  users:User[];
  foundUser:User;

  onSubmit () {

    console.log(this.loginForm.value);
    if (this.loginForm.valid){

      this.authService.getUsers().subscribe((foundUsers)=> {
        console.log(foundUsers);

        for (const user of foundUsers) {

          if (this.loginForm.value.username == user.username) {
            this.foundUser = user
          }
        }

        if (this.foundUser && this.foundUser.password == this.loginForm.value.password) {
          this.authService.authenticateUser()
          // TODO: add navigation to user page
          // this.router.navigateByUrl('users/id')

          alert("Welcome Back!")
        } else {
          alert ("Incorrect username or password")
          // TODO: maybe a page refresh of clear form??
        }

      });



    } else {
      alert(this.loginForm.errors)
    }
  }

  login() {

  }

  ngOnInit(): void {
  }

}
