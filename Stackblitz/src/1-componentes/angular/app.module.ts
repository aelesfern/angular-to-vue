import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TodosModule } from "./todos/todos.module";

@NgModule({
  imports: [BrowserModule, TodosModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
