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
        text: 'Do my laundry'
      },
      {
        text: 'Work out chest today'
      },
      {
        text: 'Bye broccoli for dinner'
      }
    ];
  }

  addTodo() {
    console.log(this.text);
  }

}
