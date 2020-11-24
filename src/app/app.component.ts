import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Todo} from './interface'
import {TodoService} from './todo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup
  titleIsInvalid=false
  textIsInvalid=false

  constructor(public todoService:TodoService){    
   }

  ngOnInit()
  {
    this.form=new FormGroup({
      title:new FormControl('', Validators.required),
      text: new FormControl('', Validators.required)
    })

    this.todoService.getTodos();

  }

  submit()
  {    
    this.form.controls.title.status == 'INVALID' || !this.form.value.title.trim() ? this.titleIsInvalid=true : this.titleIsInvalid=false;
    this.form.controls.text.status == 'INVALID' || !this.form.value.text.trim() ? this.textIsInvalid=true : this.textIsInvalid=false;
   
    if (this.form.valid && !!this.form.value.title.trim() && !!this.form.value.title.trim())
    {
      const formData ={...this.form.value}
      const todo:Todo={
        title: this.form.value.title,
        text: this.form.value.text,
        id: ++this.todoService.id
      }
      this.form.reset();
      this.todoService.addTodo(todo);
    }      
  }

  removeTodo(id:number)
  {     
    this.todoService.deleteTodo(id);    
  }
}
