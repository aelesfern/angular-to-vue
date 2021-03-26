import { Component, ViewChild } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { TodoListComponent } from "./todo-list.component";
import { ITodo } from "./todo.model";

@Component({
    selector: 'app-todos',
    template: `
        <app-todo-list [todos]="todos" (remove)="removeTodo($event)"></app-todo-list>
        <button (click)="removeAll()">Eliminar todos</button>
        <form>
            <label>Añadir tarea
                <input type="text" [formControl]="newTodo" />
            </label>
            <button (click)="addTodo()" [disabled]="newTodo.invalid">Añadir</button>
        </form>
    `
})
export class TodosComponent {
    @ViewChild(TodoListComponent, {static: true}) todoListComponent: TodoListComponent;
    todos: ITodo[] = [];
    newTodo = new FormControl("", [Validators.minLength(5), Validators.required]);

    constructor() {
        this.todos = [{ value: "Limpiar los platos", done: true }];
    }

    addTodo() {
        this.todos.push({ value: this.newTodo.value, done: false });
        this.newTodo.reset();
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