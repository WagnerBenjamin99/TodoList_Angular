import { Injectable } from '@angular/core';
import { State, task } from '../models/task-model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'tasks';
  tasks : task[] = [];
  private tasksSubject = new BehaviorSubject<task[]>(this.tasks);
 

  constructor() { 
    this.loadFromLocalStorage();
    
  }

  public getTasks(): Observable<task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task:task){
    this.tasks.push(task);
    this.updateLocalStorageTasks();
  }

  updateLocalStorageTasks(){
    this.tasksSubject.next(this.tasks);
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  updateTask(index : number, task : task){
    this.tasks[index] = task;
  }

  deleteTaks(id : task['id']){
    console.log(id);
     this.tasks = this.tasks.filter((task) =>  task.id !== id );
     this.updateLocalStorageTasks();
    }

    loadFromLocalStorage(){
      const storedTasks = localStorage.getItem('todos');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
    }
   

  changeState(id : number, newState : State ){
    this.tasks.map(
      (task) => {
        task.id === id ? task.state=newState : null;    
      }
    )
  }

}
