import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { AddDeleteTaskComponent } from './add-delete-task/add-delete-task.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'info/:id', component: TaskInfoComponent },

  {
    path: 'task-search',
    component: TaskSearchComponent
  }, {
    path: 'add-delete-task',
    component: AddDeleteTaskComponent
  }];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
