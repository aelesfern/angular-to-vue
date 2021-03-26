import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ThisIsAngularDirective } from "./shared/this-is-angular.directive";
import { TodosModule } from "./todos/todos.module";

@NgModule({
  imports: [
    BrowserModule,
    TodosModule,
    AppRoutingModule],
  declarations: [
    AppComponent,
    ThisIsAngularDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
