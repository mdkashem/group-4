import { Component, OnInit } from '@angular/core';
import{ToDoServiceService} from '../to-do-service.service'
import {Task} from '../Task'

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {

 tasks: Task[];  
  constructor( private taskService: ToDoServiceService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
  }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks=>this.tasks = tasks)
  }

  updateTask($event): void {

    console.log("update button was clicked! " , $event);
    this.taskService.updateTask(this.selectedTask)
    .subscribe();
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    //this.heroService.deleteHero(hero).subscribe();
    this.taskService.deleteTask(task.id).subscribe();
  }

}
