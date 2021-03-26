import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ThisIsAngularDirective } from "./shared/this-is-angular.directive";
import { TodosModule } from "./todos/todos.module";

@NgModule({
  imports: [BrowserModule, TodosModule],
  declarations: [AppComponent, ThisIsAngularDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
