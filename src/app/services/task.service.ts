import { Injectable } from '@angular/core';
import { task } from '../models/task-model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'tasks';
  tasks : task[] = [];
  private todosSubject = new BehaviorSubject<task[]>(this.tasks);
 

  constructor() { 
    
  }

  public getTasks(): Observable<task[]> {
    return this.todosSubject.asObservable();
  }

  addTask(task:task){
    this.tasks.push(task);
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  updateTask(index : number, task : any){
    this.tasks[index] = task;
  }

  deleteTaks(index : number){
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }   

}
