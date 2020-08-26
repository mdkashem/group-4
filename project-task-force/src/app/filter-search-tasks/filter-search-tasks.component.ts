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

  filterResultDataSet = [
    {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      country: 'Pourtgal',
      club:'Juventus'
    },
    {
      firstName: 'Leo',
      lastName: 'Messi',
      country: 'Argentina',
      club:'Barcelona'
    },
    {
      firstName: 'Neymar',
      lastName: 'Junior',
      country: 'BRAZIL',
      club:'PSG'
    },
    {
      firstName: 'Sergio',
      lastName: 'Ramos',
      country: 'SPAIN',
      club:'Real Madrid'
    },
    {
      firstName: 'Karim',
      lastName: 'Benzema',
      country: 'France',
      club:'Real Madrid'
    },
    {
      firstName: 'Sergio',
      lastName: 'Buiscut',
      country: 'SPAIN',
      club:'Barcelona'
    },
    {
      firstName: 'Gerard',
      lastName: 'Pique',
      country: 'SPAIN',
      club:'Barcelona'
    }
  ]

  tasks: Task[];  
  constructor( private taskService: ToDoServiceService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks=>this.tasks = tasks)
  }

}
