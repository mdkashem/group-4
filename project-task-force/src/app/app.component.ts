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
  signedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.checkAuth();
    if (localStorage.getItem('signedIn')) {
      this.authService.authenticateUser();
    }

    this.authService.signedIn.subscribe(signedIn => {
      this.signedIn = signedIn;
    })
  }



}
