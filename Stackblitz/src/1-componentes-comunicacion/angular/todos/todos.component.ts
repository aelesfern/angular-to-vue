import { Component, ViewChild } from "@angular/core";
import { TodoListComponent } from "./todo-list.component";
import { ITodo } from "./todo.model";

@Component({
    selector: 'app-todos',
    template: `
        <app-todo-list [todos]="todos" (remove)="removeTodo($event)"></app-todo-list>
        <button (click)="removeAll()">Eliminar todos</button>
    `
})
export class TodosComponent {
    @ViewChild(TodoListComponent, {static: true}) todoListComponent: TodoListComponent;
    todos: ITodo[] = [];

    constructor() {
        this.todos = [{ value: "Limpiar los platos", done: true }];
    }

    removeTodo(todo: ITodo) {
        this.todos = this.todos.filter(elem => elem !== todo);
    }

    /**
     * This method has been created to make an example of @ViewChild usage, but its design is poor
     */
    removeAll() {
        this.todos.forEach(todo => this.todoListComponent.removeTodo(todo));
    }


}