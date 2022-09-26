import { JsonPipe } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("taskList") || '[]');

  constructor() { }

  ngDoCheck(): void {
    this.setLocalstorage();
  }

  public setEmitTask(task: string): void {
    this.taskList.push({ task: task, checked: false });
  }

  public deleteItem(index: number) {
    this.taskList.splice(index, 1);
  }

  public deleteAll() {
    const confirm = window.confirm("Você tem certeza que deseja deletar todas as Tasks?")

    if (confirm)
      this.taskList = [];
  }

  public validationInput(task: string, index: number) {
    if (!task.length) {
      const confirm = window.confirm("Task vazia, deseja Deletar?")

      if (confirm)
        this.deleteItem(index);
    }
  }

  public setLocalstorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("taskList", JSON.stringify(this.taskList));
    }
  }
}
