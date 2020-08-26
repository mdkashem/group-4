import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit(): void {
    this._router.navigate(['/filter-search-tasks'])
  }

}
