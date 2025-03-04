import { Component, OnInit } from '@angular/core';
import { Todo, TodoStatus } from './interfaces/todo.interface';
import { TodosService } from './services/todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public todoList? : Todo[];
  public todoSuscription?: Subscription;

  constructor(private __todoService : TodosService) {    
  }

  ngOnInit(): void {
    this.todoSuscription = this.__todoService.getTodos().subscribe( todos =>{
      this.todoList = todos;
    });
  }

  ngOnDestroy(): void {
    this.todoSuscription?.unsubscribe();
    
  }

  

}
