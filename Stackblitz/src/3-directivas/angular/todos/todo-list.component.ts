import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITodo } from "./todo.model";

@Component({
    selector: 'app-todo-list',
    template: `
        <app-card  *ngFor="let todo of todos">
            <ol app-todo [todo]="todo"></ol>
            <button slot-footer (click)="removeTodo(todo)">Eliminar</button>
        </app-card>

        <span>Total: {{ todoQuantity() }} ToDo's</span>
    `
})
export class TodoListComponent {
    @Input() todos: ITodo[] = [];
    @Output() remove = new EventEmitter<ITodo>();

    removeTodo(todo: ITodo) {
        this.remove.emit(todo);
    }

    todoQuantity() {
        return this.todos.length;    
    }

}