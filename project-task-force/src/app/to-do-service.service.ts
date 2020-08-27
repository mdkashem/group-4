import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { Task } from './Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor(private http: HttpClient) { }
  addTask(task: Task): Observable<any>{
     return this.http.post<Task>(`http://18.216.97.30:8080//todos/?${task.id}`, task).pipe(
      catchError((error: any) => {
        console.error(error);
        alert (`The task was not created!`);
        return throwError(error);
      })
    );
  }
//getTask retrive list of task
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`http://18.216.97.30:8080/todos`);
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`http://18.216.97.30:8080/todos/${id}`).pipe(
      catchError((error: any) => {
        console.error(error);
        alert ('The task was not deleted!');
        return throwError(error);
      })
    );
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`http://18.216.97.30:8080/todos/${id}`).pipe(
      catchError((error: any) => {
        console.error(error);
        alert (`The Task does not exist!`);
        return throwError(error);
      })
    );
  }

  updateTask(task: Task): Observable<Task>{
    return this.http.put<Task>('http://18.216.97.30:8080/todos', task, this.httpOptions).pipe(
      catchError((error: any) =>{
        alert('Update Failed');
        return throwError(error);
      })
    )
  }

  toggleCompleted(task:Task):Observable<any> {
    console.log(task);
    return this.http.put<Task>('http://18.216.97.30:8080/todos', task, this.httpOptions).pipe(
      catchError((error: any) =>{
        alert('Update Failed');
        return throwError(error);
      })
    )
  }

}
