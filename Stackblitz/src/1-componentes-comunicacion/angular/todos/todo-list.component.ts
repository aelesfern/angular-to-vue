import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITodo } from "./todo.model";

@Component({
    selector: 'app-todo-list',
    template: `
        <div *ngFor="let todo of todos">
            <ol app-todo [todo]="todo"></ol>
            <button (click)="removeTodo(todo)">Eliminar</button>
        </div>
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