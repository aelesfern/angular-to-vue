import { Component } from "@angular/core";

@Component({
  selector: "app-card",
  template: `
    <div class="container">
      <div class="content">
        <ng-content select="[slot-content]"></ng-content>
      </div>
      <div class="footer"><ng-content select="[slot-footer]"></ng-content></div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 5px;
        padding: 15px;
        margin: 10px 20px;
      }
    `
  ]
})
export class CardComponent {}
