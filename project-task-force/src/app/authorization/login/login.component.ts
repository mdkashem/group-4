import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
    private router:Router
  ) { }


  users:User[];
  foundUser:User;

  onSubmit (f:NgForm) {



    console.log(this.loginForm.value);
    if (this.loginForm.valid) {

      // this.authService.logIn(this.loginForm.value).subscribe((response) => {
      //   console.log(response);
      // })

      this.authService.getUsers().subscribe((foundUsers)=> {
        console.log(foundUsers);
        for (const user of foundUsers) {
          if (this.loginForm.value.username == user.username) {
            this.foundUser = user
          }
        }

        if (this.foundUser && this.foundUser.password == this.loginForm.value.password) {
          this.authService.authenticateUser(this.foundUser.username);
          this.router.navigateByUrl('/');
        } else {
          alert ("Incorrect username or password")
        }
      });
    }
  }



  ngOnInit(): void {
    if (localStorage.getItem('signedIn')) {
      this.router.navigateByUrl('/')  
    }
  }

}
