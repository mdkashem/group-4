import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Task } from './Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { TODOTASKS } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  private tasksUrl = `http://18.216.97.30:8080/todos`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 
  getTasks(): Observable<Task[]> {
    // return of(TODOTASKS); 
    return this.http.get<Task[]>(`http://18.216.97.30:8080/todos`)
    .pipe(
      tap(_ => this.log('fetched tasks')),
      catchError(this.handleError<Task[]>('getTasks', []))
    );
  }


  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    // return of(TODOTASKS.find(task => task.id === id));
    return this.http.get<Task>(url).pipe(
      tap(_ => this.log(`fetched task id=${id}`)),
      catchError(this.handleError<Task>(`getTask id=${id}`))
    );
  }



  updateTask(task: Task): Observable<any> {
    return this.http.put(this.tasksUrl, task, this.httpOptions).pipe(
      tap(_ => this.log(`updated task id=${task.id}`)),
      catchError(this.handleError<any>('updateTask'))
    );
  }
  

addTask(task: Task): Observable<Task> {
  return this.http.post<Task>(this.tasksUrl, task, this.httpOptions)
  .pipe(
    tap((newTask: Task) => this.log(`added task w/ id=${newTask.id}`)),
    catchError(this.handleError<Task>('addTask'))
  );
}

deleteTask(task: Task | number): Observable<Task> {
  const id = typeof task === 'number' ? task : task.id;
  const url = `${this.tasksUrl}/${id}`;

  return this.http.delete<Task>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted task id=${id}`)),
    catchError(this.handleError<Task>('deleteTask'))
  );
}

searchTasks(term: string): Observable<Task[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  //    return of(TODOTASKS).pipe(
  //     tap(x => x.length ?
  //       this.log(`found tasks matching "${term}"`) :
  //       this.log(`no tasks matching "${term}"`)),
  //    catchError(this.handleError<Task[]>('searchTasks', []))
  //  );
  let taskContainsTerm = (task: Task)=>
  {return task.title.includes(term)}
  return this.http.get<Task[]>(`${this.tasksUrl}`).pipe(
    map((arr:Task[])=>{return arr.filter(taskContainsTerm)}),
    tap(x => x.length ?
       this.log(`found tasks matching "${term}"`) :
       this.log(`no tasks matching "${term}"`)),
    catchError(this.handleError<Task[]>('searchTasks', []))
  );
}
// Why does this return with matching results no matter what?

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


private log(message: string) {
  this.messageService.add(`ToDoServiceService: ${message}`);
}



}
