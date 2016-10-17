import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
   this.todos = this._todoService.getTodos();
  }

  addTodo() {
    const newTodo = {
      task: this.text
    }
    this.todos.push(newTodo);

    this._todoService.addTodoService(newTodo)
  }

  deleteTodo(todoTask) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].task === todoTask) {
        this.todos.splice(i, 1);
      }
    }
  }

}
