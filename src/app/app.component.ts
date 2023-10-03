import { Component } from '@angular/core';
import { task, State } from './models/task-model';
import { TaskService } from './services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks?: task[];
   
  private todosSubscription: Subscription;

  constructor(private taskService : TaskService) {
    this.todosSubscription = this.taskService.getTasks().subscribe((tasks : task[]) => {
      this.tasks = tasks;
      console.log(tasks);
    });
  }

  ngDestroy() {
    this.todosSubscription.unsubscribe();
  }
}
