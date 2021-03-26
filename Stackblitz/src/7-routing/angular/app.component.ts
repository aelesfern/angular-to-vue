import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  <section thisIsAngular px="5" border-style="dashed">
    <h1>ToDo Angular</h1>
    <router-outlet></router-outlet>
</section>
  `
})
export class AppComponent {}
