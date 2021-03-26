import { Component } from "@angular/core";
import { ITodo } from "./todo.model";

@Component({
    selector: 'app-todos',
    template: `
    <div>
        <ul *ngFor="let todo of todos">
            <li><input type="checkbox" [(ngModel)]="todo.done" /></li>
            <li>{{ todo.value }}</li>
        </ul>
    </div>
    <span>Total: {{ todoQuantity() }} ToDo's</span>
    `
})
export class TodosComponent {
    todos: ITodo[] = [{ value: "Limpiar los platos", done: true }];

    todoQuantity() {
        return this.todos.length;
    }
}