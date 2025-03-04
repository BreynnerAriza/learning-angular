import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemsComponent } from './components/todo-list-items/todo-list-items.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemsComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot({
      closeButton:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
