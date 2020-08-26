import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterSearchTasksComponent } from './filter-search-tasks/filter-search-tasks.component';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { SelectViewTaskComponent } from './select-view-task/select-view-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { HomeComponent } from './home/home.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { LogoutComponent } from './authorization/logout/logout.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegistrationComponent } from './authorization/registration/registration.component';
import { AuthGuard } from './authorization/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'filter-search-tasks',
    component: FilterSearchTasksComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'create-tasks',
    component: CreateTasksComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'select-view-task',
    component: SelectViewTaskComponent
  }, {
    path: 'update-task',
    component: UpdateTaskComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'delete-task',
    component: DeleteTaskComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path:'logout',
    component: LogoutComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
  ,
  {
    path: '**',
    component: RouteNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
