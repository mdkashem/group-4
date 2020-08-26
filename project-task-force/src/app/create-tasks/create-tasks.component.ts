import { Component, OnInit } from '@angular/core';
import { Task} from '../Task'
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import{ToDoServiceService} from '../to-do-service.service'
@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.css']
})
export class CreateTasksComponent implements OnInit {

  completed = [true, false];
  model = new Task(22, 'Task 22', '8/25/2020', this.completed[1]);
  submitted = false;
  onSubmit(){
    this.submitted= true;
  }
   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.model); }
  constructor( private taskService: ToDoServiceService) { }

  createTask(): void{
      this.taskService.addTask(new Task (this.model.id, this.model.title, this.model.createdOn, this.model.completed)).subscribe();
      console.log("CreateTask was called");
  }

  ngOnInit(): void {
  }

  

}
