import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TodosComponent } from "./todos.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TodosComponent],
    exports: [TodosComponent]
})
export class TodosModule {}