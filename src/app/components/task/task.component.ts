import { Component, Input, OnInit } from '@angular/core';
import { task } from 'src/app/models/task-model';
import { FormControl, MaxLengthValidator, NgModel } from '@angular/forms'
import { TaskService } from 'src/app//services/task.service';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 
  constructor (private taskService : TaskService){}
  tasks : any[] = [];
  

  @Input() task? : task;



  name : string = '';
  description = new FormControl('');
  state = new FormControl('');
  dateLimit = new FormControl('');

  ngOnInit(): void {

  }



  editTask(i : number, editedTask : task){
    this.taskService.updateTask(i, editedTask);
  }

  deleteTaski(i : number){
   this.taskService.deleteTaks(i);
  }

  
}
