import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  usersUrl:string = 'https://the-phone-book.herokuapp.com/users'

  signedIn = new BehaviorSubject({status: false, currentUser: null});

  //activeUser = new BehaviorSubject(null);

  constructor(private http:HttpClient) { }

  createUser(user:User):Observable<User> {
    console.log('user created');
    return this.http.post<User>(this.usersUrl, user, {
      withCredentials: true
    });
  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id:number):Observable<User> {
    return this.http.get<User>(`${this.usersUrl}${id}`)
  }

  updateUser(user:User):Observable<any> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put(url, user, httpOptions);
  }

  deleteUser(user:User):Observable<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.delete<User>(url, httpOptions)
  }

  logIn (user:User) {
    console.log(user);
    return this.http.post<User>('https://the-phone-book.herokuapp.com/sessions', user)
  }

  authenticateUser(username:string) {
    this.signedIn.next({status: true, currentUser: username});
    localStorage.setItem('signedIn', username)


    // JSON.parse() to unstringify

  }

  logOut() {
    localStorage.removeItem('signedIn')
    this.signedIn.next({status: false, currentUser: null});

  }

  checkAuth() {
    localStorage.getItem('signedIn');
  }



}
