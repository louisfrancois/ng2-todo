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
  oldText;
  appState = 'default';

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
   this.todos = this._todoService.getTodos();
  }

  addTodo() {
    const newTodo = {
      task: this.text
    }
    this.todos.push(newTodo);
    this.text = '';

    this._todoService.addTodoService(newTodo);
  }

  deleteTodo(todoTask) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].task === todoTask) {
        this.todos.splice(i, 1);
      }
    }

    this._todoService.deleteTodoService(todoTask);
  }

  editTodo(todo) {
    this.appState = 'edit';
    this.oldText = todo.task;
    this.text = todo.task;
  }

  updateTodo() {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].task === this.oldText) {
        this.todos[i].task = this.text;
      }
    }

    this._todoService.updateTodoService(this.oldText, this.text);
  }

}
