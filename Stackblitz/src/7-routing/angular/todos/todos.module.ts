import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TodoListComponent } from "./todo-list.component";
import { TodoComponent } from "./todo.component";
import { TodosComponent } from "./todos.component";

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild([
            { path: '', component: TodosComponent}
        ])],
    declarations: [
        TodosComponent,
        TodoListComponent,
        TodoComponent],
    exports: [TodosComponent]
})
export class TodosModule {}