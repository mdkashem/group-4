import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterSearchTasksComponent } from './filter-search-tasks/filter-search-tasks.component';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { SelectViewTaskComponent } from './select-view-task/select-view-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { HomeComponent } from './home/home.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { DisplayTaskComponent } from './display-task/display-task.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {Ng2SearchPipeModule} from 'ng2-search-filter'

import { AuthorizationModule } from './authorization/authorization.module';
import { TaskDetailComponent } from './task-detail/task-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterSearchTasksComponent,
    CreateTasksComponent,
    SelectViewTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent,
    HomeComponent,
    RouteNotFoundComponent,
    DisplayTaskComponent,
    RouteNotFoundComponent,
    DisplayTaskComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
