import { FormControl, AsyncValidator } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UniqueUser implements AsyncValidator {

  constructor(
    private http:HttpClient
  ) { }

  validate = (control:FormControl) => {
    const {value} = control;
    console.log(value);

    return this.http
      .get<any>('https://the-phone-book.herokuapp.com/users').pipe(
          map((users) => {
            for (const user of users) {
              (user.username == value);
              if(user.username == value) {
                return { unavailable: true }
              }
            }
            return null
      })
    )
  }
}
