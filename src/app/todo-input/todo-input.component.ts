import { Component, OnInit } from '@angular/core';
import { Todo } from '../todoModel';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'to-do-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  todo: Todo[];
  todoFire: FirebaseListObservable<any[]>;
  saveToFire: Todo;
  addTodoForm: boolean;
  editTodoForm: boolean;
  editTodoItem: any;
  constructor(af: AngularFire) {
    this.todo = [];
    this.todoFire = af.database.list('todos');
    this.addTodoForm = false;
    this.editTodoForm = false;
  }

  toggleFormStatus() {
    this.addTodoForm = !this.addTodoForm;
  }
  addTodo(todo: HTMLInputElement, desc: HTMLInputElement) {
    console.log(`I have to do: ${todo.value} Details are: ${desc.value} `);
    this.saveToFire = new Todo(todo.value, desc.value)
    this.todo.push(this.saveToFire);
    this.todoFire.push(this.saveToFire);

    this.addTodoForm = !this.addTodoForm;
    todo.value = '';
    desc.value = '';
    return false;
  }
  changeStatus(status: any) {
    console.log(status);
    status.status == 0 ? status.status = 1 : status.status = 0;
    // this.saveToFire = new Todo(status.value, status.value, status.value, status.status);
    // this.todoFire.update(status.$key, this.saveToFire);
  }
  activeEdit(editTodo) {
    this.editTodoForm = !this.editTodoForm;

    // this.addTodoForm = !this.addTodoForm;
    this.editTodoItem = editTodo;
  }

  ngOnInit() {
  }


  addItem(newName: string) {
    console.log(newName);
    this.todoFire.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.todoFire.update(key, { text: newText });
  }
  deleteTodoFir(key: string) {
    this.todoFire.remove(key);
  }
  deleteEverything() {
    this.todoFire.remove();
  }



  updateTodo(key, todo: HTMLInputElement, desc: HTMLInputElement) {
    console.log(`I have to do: ${todo.value} Details are: ${desc.value}`);
    this.saveToFire = new Todo(todo.value, desc.value)
    this.todo.push(this.saveToFire);
    // this.todoFire.push(this.saveToFire);
    this.todoFire.update(key, this.saveToFire);
    this.editTodoForm = !this.editTodoForm;
    todo.value = '';
    desc.value = '';
    return false;
  }

}
