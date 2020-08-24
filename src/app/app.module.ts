import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskSearchComponent } from './task-search/task-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDeleteTaskComponent } from './add-delete-task/add-delete-task.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskInfoComponent,
    MessagesComponent,
    TaskSearchComponent,
    NavbarComponent,
    AddDeleteTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
