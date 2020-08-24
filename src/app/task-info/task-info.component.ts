import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TaskService} from '../task.service';
import { ToDoServiceService } from '../to-do-service.service'

import { Task } from '../task';
@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent implements OnInit {
  @Input() task: Task;
  constructor(
    private route: ActivatedRoute,
    private todoserviceService: ToDoServiceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoserviceService.getTask(id)
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.todoserviceService.updateTask(this.task)
      .subscribe(() => this.goBack());
  }
  
}
