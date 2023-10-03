import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { State } from 'src/app/models/task-model';
import { task } from 'src/app/models/task-model';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent{

  constructor(private taskSerice : TaskService){}

  public  title : string= '';
  public description : string = '';
  public state : State = State.PENDIENTE;
  public dateLimit? : Date;

  public addTodo() {
    const newTodo: task = {
      name : this.title,
      description: this.description,
      state: this.state,
      dateLimit: new Date(),
    };

    console.log(newTodo);
    this.taskSerice.addTask(newTodo);
    }
    
}


