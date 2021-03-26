import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { TodoListComponent } from "./todo-list.component";
import { TodoComponent } from "./todo.component";
import { TodosComponent } from "./todos.component";

@NgModule({
    imports: [SharedModule, FormsModule],
    declarations: [TodosComponent, TodoListComponent, TodoComponent],
    exports: [TodosComponent]
})
export class TodosModule {}