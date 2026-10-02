import { Component, inject } from '@angular/core';
import { TaskFormComponent } from './component/task-form/task-form';
import { TaskListComponent } from './component/task-list/task-list';
import { Taskservice } from './services/task';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [
    TaskFormComponent,
    TaskListComponent
  ],

  templateUrl: './app.html',

  styleUrl: './app.css'
})
export class App {
  taskService = inject(Taskservice);

  saveTask(task: any) {
    this.taskService.addTask(task);
  }
}