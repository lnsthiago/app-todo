import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent implements OnInit {

  @Output() public emmitItemTaskList = new EventEmitter();

  public task: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItem() {
    this.task = this.task.trim();
    if (this.task)
      this.emmitItemTaskList.emit(this.task);
    this.task = "";
  }
}
