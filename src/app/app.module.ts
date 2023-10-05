import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { StatePipe } from './pipes/state.pipe';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    FormTaskComponent,
    StatePipe,
    TaskFilterComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
