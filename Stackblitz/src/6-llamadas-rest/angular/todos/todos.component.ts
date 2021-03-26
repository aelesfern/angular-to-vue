import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { map } from "rxjs/operators";
import { CustomValidations } from "../shared/custom-validations.service";
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
    newTodo = new FormControl("", [Validators.minLength(5), Validators.required, this.customValidations.looksLegit()]);

    constructor(private customValidations: CustomValidations, private httpClient: HttpClient) {
        this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/todos")
            .pipe(
                map(res => res.map(todo => (<ITodo>{ value: todo.title, done: todo.completed }))),
                map(todos => todos.slice(0, 5))
            )
            .subscribe(todos => (this.todos = todos));
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