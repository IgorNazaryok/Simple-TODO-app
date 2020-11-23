import { Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';
import {Todo} from '../interface'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo:Todo
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  RemoveTodo(todoId:number){ 
    this.onRemove.emit(todoId)    
  }

}
