import { Injectable } from '@angular/core';
import {Todo} from './interface'

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todos =[]
  id=0;

  constructor() { }


  addTodo(todo:Todo)
  {
    this.todos.unshift(todo);
    localStorage.listTodos = JSON.stringify(this.todos);          
  }

  getTodos()
  {
    this.todos = localStorage.listTodos ? JSON.parse(localStorage.listTodos) : []; 
    this.todos.length ? this.id = Math.max(...this.todos.map((key)=> {return key.id})) : null    
  }

  deleteTodo(id:number)
  {     
    this.todos=this.todos.filter(todo=>todo.id!==id)
    localStorage.listTodos = JSON.stringify(this.todos);
  }
}
