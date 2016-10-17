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
    console.log(this.text);
  }

}
