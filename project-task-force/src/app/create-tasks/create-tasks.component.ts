import { Component, OnInit } from '@angular/core';
import { Task} from '../Task'
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import{ToDoServiceService} from '../to-do-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.css']
})
export class CreateTasksComponent implements OnInit {

  completed = [true, false];
  model = new Task(22, 'Task title goes here', 'mm/dd/yyyy', this.completed[1]);
  submitted = false;
  onSubmit(){
    this.submitted= true;
  }
   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.model); }
  constructor( private taskService: ToDoServiceService, private _router: Router) { }

  createTask(): void{
      this.taskService.addTask(new Task (this.model.id, this.model.title, this.model.createdOn, this.model.completed)).subscribe();
      this._router.navigate([''])
  }

  ngOnInit(): void {
  }

  

}
