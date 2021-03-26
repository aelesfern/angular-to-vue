import { Component, Input } from "@angular/core";
import { ITodo } from "./todo.model";

@Component({
    selector: '[app-todo]',
    template: `
      <li><input type="checkbox" [(ngModel)]="todo.done" /></li>
      <li>{{ todo.value }}</li>
    `
})
export class TodoComponent {
    @Input() todo: ITodo;
}
// TODO: Delegate done logic to parent