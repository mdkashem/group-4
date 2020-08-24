import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
  import { TaskService } from '../task.service';
  import { ToDoServiceService } from '../to-do-service.service'
  import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-delete-task',
  templateUrl: './add-delete-task.component.html',
  styleUrls: ['./add-delete-task.component.css']
})
export class AddDeleteTaskComponent implements OnInit {

 
    todotasks: Task[];
  
    // constructor(private taskService: TaskService, private messageService: MessageService) { }
    constructor(private todoserviceService: ToDoServiceService){}
    ngOnInit() {
      this.getTasks();
    }
  
    getTasks(): void {
      // this.taskService.getTasks()
      //     .subscribe(todotasks => this.todotasks = todotasks);
          this.todoserviceService.getTasks()
          .subscribe(todotasks => this.todotasks = todotasks);
    }
    add(title: string): void {
      title = title.trim();
      if (!title) { return; }
      this.todoserviceService.addTask({ title } as Task)
        .subscribe(task => {
          console.log(task);
          this.todoserviceService.getTasks();
          this.todotasks.push(task);
        });
        
      // does this reload the page so the display looks correct?
    }
  
    delete(task: Task): void {
      this.todotasks = this.todotasks.filter(h => h !== task);
      this.todoserviceService.deleteTask(task).subscribe();
    }
    
  }
  





  


