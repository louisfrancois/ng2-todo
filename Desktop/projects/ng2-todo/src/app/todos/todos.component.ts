import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        task: 'Do my laundry'
      },
      {
        task: 'Work out chest today'
      },
      {
        task: 'Bye broccoli for dinner'
      }
    ];
  }

  addTodo() {
    this.todos.push(
      {
        task: this.text
      }
    );
  }

  deleteTodo(todoTask) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].task === todoTask) {
        this.todos.splice(i, 1);
      }
    }
  }

}
