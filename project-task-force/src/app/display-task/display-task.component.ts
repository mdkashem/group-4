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
  task:Task

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

  onToggle(task:Task) {
    task.completed = !task.completed
    this.taskService.toggleCompleted(task).subscribe((task:Task) => {
      console.log(task)}
    )
  }

  // Set Dynamic Classes
  setClasses(task:Task) {
    let classes = {
      todo: true,
      'is-complete':task.completed
    }
    return classes
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    //this.heroService.deleteHero(hero).subscribe();
    this.taskService.deleteTask(task.id).subscribe();
  }

}
