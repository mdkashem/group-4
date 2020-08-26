import { Component, OnInit } from '@angular/core';
import{ToDoServiceService} from '../to-do-service.service'
import {Task} from '../Task'
@Component({
  selector: 'app-filter-search-tasks',
  templateUrl: './filter-search-tasks.component.html',
  styleUrls: ['./filter-search-tasks.component.css']
})
export class FilterSearchTasksComponent implements OnInit {
  title = 'custom-search-filter-example';
  searchedKeyword: string;

  

  tasks: Task[];  
  constructor( private taskService: ToDoServiceService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks=>this.tasks = tasks)
  }

  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
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
