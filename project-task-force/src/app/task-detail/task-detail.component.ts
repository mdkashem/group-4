import { Component, OnInit,Input } from '@angular/core';
import {Task} from'../Task'
import { Location } from '@angular/common';
import {ToDoServiceService} from '../to-do-service.service'

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
//The display-task component is the parent of the task-detail component
  @Input() task: Task;
  constructor( private location: Location,
    private service: ToDoServiceService) {
    
   }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.updateTask(this.task)
      .subscribe();
  }

}
