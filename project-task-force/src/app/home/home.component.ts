import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authorization/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService) { }

  signedIn = {status: false, currentUser: null};


  ngOnInit(): void {
    this.authService.signedIn.subscribe(signedIn => {
      this.signedIn = signedIn;
    });
  }

}
