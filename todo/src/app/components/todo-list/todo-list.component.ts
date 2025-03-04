import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() todoList? : Todo[] | null;

}
