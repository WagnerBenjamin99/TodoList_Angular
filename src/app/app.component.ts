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
  public tasks?: task[] ;
  /* [
    {
      id:1,
      name:'programar',
      description:'bsjksbksbskbsk',
      state:State.PENDIENTE,
      dateLimit:new Date(12/10/2024)
    },
    {
      id:2,
      name:'estudiar',
      description:'bsjksbksbskbsk',
      state:State.PENDIENTE,

    },
    {
      id:3,
      name:'estudiar',
      description:'bsjksbksbskbsk',
      state:State.PENDIENTE,

    }
  ]*/
   
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
