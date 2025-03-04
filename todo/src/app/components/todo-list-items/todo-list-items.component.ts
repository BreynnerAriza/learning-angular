import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodosService } from 'src/app/services/todos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.css']
})
export class TodoListItemsComponent {

  @Input() todo?: Todo | null;

  constructor(private __todoService: TodosService) {
  }

  public removeTodo() {
    Swal.fire({
      title: "Eliminar tarea?",
      text: "Estas seguro que quieres eliminar la tarea?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminala!"
    }).then((result) => {
      if (result.isConfirmed) {
        if (!this.todo) return;
        this.__todoService.removeTodo(this.todo?.id);
        Swal.fire({
          title: "Eliminada!",
          text: "La tarea ha sido eliminada",
          icon: "success"
        });
      }
    });
  }


}
