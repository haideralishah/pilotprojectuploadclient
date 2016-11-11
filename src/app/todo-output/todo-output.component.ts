import { Component, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../todoModel';


@Component({
  selector: '[todo]',
  templateUrl: './todo-output.component.html',
  styleUrls: ['./todo-output.component.css'],
  inputs: ['singleTodo', 'index'],
  outputs: ["changeStatus", "deleteTodo", "updateTodo"],
})
export class TodoOutputComponent implements OnInit {

  singleTodo: Todo;
  index: number;
  changeStatus: EventEmitter<Todo>;
  deleteTodo: EventEmitter<Todo>;
  updateTodo: EventEmitter<Todo>;
  constructor() {
    this.changeStatus = new EventEmitter();
    this.deleteTodo = new EventEmitter();
    this.updateTodo = new EventEmitter();
  }
  statusChange(todo: Todo) {
    this.changeStatus.emit(todo);
  }

  todoDelete(todoKey: any) {
    this.deleteTodo.emit(todoKey);
  }

  todoUpdate(todo: Todo){
    this.updateTodo.emit(todo);
  }

  ngOnInit() {
  }

}
