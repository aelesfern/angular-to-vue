import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TodoListComponent } from "./todo-list.component";
import { TodoComponent } from "./todo.component";
import { TodosComponent } from "./todos.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TodosComponent, TodoListComponent, TodoComponent],
    exports: [TodosComponent]
})
export class TodosModule {}