import { Component } from '@angular/core';

///////////////////////// AuthService /////////////////////////
import { AuthService } from './authorization/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-task-force';





////////// BehaviorSubject for auth state persistance //////////
  signedIn = {status: false, currentUser: null};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    if (localStorage.getItem('signedIn')) {
      console.log(localStorage.getItem('signedIn'));
      this.authService.authenticateUser(localStorage.getItem('signedIn'));
      console.log(this.signedIn);
    }

    this.authService.signedIn.subscribe(signedIn => {
      this.signedIn = signedIn;
    })
  }

}
