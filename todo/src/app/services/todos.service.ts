import { Injectable, OnInit } from '@angular/core';
import { Todo, TodoStatus } from '../interfaces/todo.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = [];

  private todoSubject = new BehaviorSubject<Todo[]>(this.todos);

  constructor() { 
    this.loadFromStorage();
    this.update();
  }

  public addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    this.update();
  } 

  public removeTodo(todoId: Todo["id"]) {
    this.todos = this.todos.filter(todo => todo.id != todoId);
    this.update();
  }

  public getTodos(): Observable<Todo[]> {
    return this.todoSubject.asObservable();
  }

  private update(){
    this.todoSubject.next(this.todos);
    this.updateLocalStorage();
  }

  private updateLocalStorage(){
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private loadFromStorage(){
    const storeTodo = localStorage.getItem('todos');
    if(storeTodo){
      this.todos = JSON.parse(storeTodo);
    }
  }

}
