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

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks=>this.tasks = tasks)
  }

}
