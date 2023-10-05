import { Component, Input, OnInit } from '@angular/core';
import { State, task } from 'src/app/models/task-model';
import { FormControl, MaxLengthValidator, NgModel } from '@angular/forms'
import { TaskService } from 'src/app//services/task.service';
import { StatePipe } from 'src/app/pipes/state.pipe';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 
  constructor (private taskService : TaskService){}
  tasks : task[] = [];
  

  @Input() task? : task;



  name : string = '';
  description = new FormControl('');
  state = new FormControl('');
  dateLimit = new FormControl('');
  isChecked : boolean = false;

  ngOnInit(): void {

  }

  editTask(i : number, editedTask : task){
    this.taskService.updateTask(i, editedTask);
  }

  deleteTask(){
    if(this.task?.id) return this.taskService.deleteTaks(this.task?.id);
  }

  changeState(){
    if(this.task?.state){
      if(this.task?.state==State.PENDIENTE){
        this.task.state=State.COMPLETADA;
        this.isChecked=true;
      }
      else{
        this.task.state=State.PENDIENTE;
        this.isChecked=false;
      }
       
      this.taskService.changeState(this.task?.id, this.task?.state);

    }
    
  }
  
}
