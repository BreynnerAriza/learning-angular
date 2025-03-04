import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Todo, TodoStatus } from 'src/app/interfaces/todo.interface';
import { TodosService } from 'src/app/services/todos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  constructor(
    private _todoService : TodosService,
    private _toastr:ToastrService
  ){}

  public newTodoDescription : string = '';
  public todoStatus : TodoStatus = TodoStatus.emtpy;

  //Metodo para agregar una nueva tarea
  public newTodo() {    
    // Validar que la descripción no esté vacía
    if (!this.newTodoDescription.trim()) { // Aquí corregimos la condición
      Swal.fire({
        icon: "error",
        title: "No se pudo guardar",
        text: "Falta que agregues una descripción",        
      });
      return; // Detener la ejecución si la descripción está vacía
    }
  
    const newTodo: Todo = {
      id: Math.random(),
      description: this.newTodoDescription,
      status: this.todoStatus,
      createdAt: new Date()
    };
  
    this._todoService.addTodo(newTodo);
  
    Swal.fire({
      title: "Tarea agregada correctamente",
      icon: "success",
      draggable: true
    });
  
    this.newTodoDescription = '';
  }
  

}
