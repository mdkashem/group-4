import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Task } from './Task';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor(private http: HttpClient) { }
  addTask(task: Task): Observable<any>{
     return this.http.post<Task>(`http://18.216.97.30:8080//todos/?${task.id}`, task);
  }
//getTask retrive list of task 
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`http://18.216.97.30:8080/todos`);
  }
}
