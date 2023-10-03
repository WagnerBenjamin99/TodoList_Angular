import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { task } from 'src/app/models/task-model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  implements OnInit{
  
  @Input() tasks? : task[];  

  constructor(private taskService : TaskService){}


  ngOnInit(): void {
    
  }
}
