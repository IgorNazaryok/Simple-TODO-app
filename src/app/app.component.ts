import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Todo} from './interface'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup
  titleIsInvalid=false
  textIsInvalid=false
  todos =[]
  id=1;



  ngOnInit()
  {
    this.form=new FormGroup({
      title:new FormControl('', Validators.required),
      text: new FormControl('', Validators.required)
    })

    this.GetTodos();

  }

  submit()
  {    
    this.form.controls.title.status == 'INVALID' || !this.form.value.title.trim() ? this.titleIsInvalid=true : this.titleIsInvalid=false;
    this.form.controls.text.status == 'INVALID' || !this.form.value.title.trim() ? this.textIsInvalid=true : this.textIsInvalid=false;
   
    if (this.form.valid && !!this.form.value.title.trim() && !!this.form.value.title.trim())
    {
      const formData ={...this.form.value}
      const todo:Todo={
        title: this.form.value.title,
        text: this.form.value.text,
        id: this.id++
      }
      this.form.reset();
      this.todos.unshift(todo);
      localStorage.listTodos = JSON.stringify(this.todos);
    }      
  }

  GetTodos ()
  {
    this.todos = localStorage.listTodos ? JSON.parse(localStorage.listTodos) : [];
  }

  removeTodo(id:number)
  {     
    this.todos=this.todos.filter(todo=>todo.id!==id)
    localStorage.listTodos = JSON.stringify(this.todos);
  }
}
