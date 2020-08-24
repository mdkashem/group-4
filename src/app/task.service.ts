import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Task } from './task';
import { TODOTASKS } from './mock-tasks';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private messageService: MessageService) { }
  getTasks(): Observable<Task[]> {
    
    this.messageService.add('TaskService: fetched tasks');
    return of(TODOTASKS);
  }
  getTask(id: number): Observable<Task> {
    
    this.messageService.add(`TaskService: fetched task id=${id}`);
    return of(TODOTASKS.find(task => task.id === id));
  }
}
