import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { ThisIsAngularDirective } from "./this-is-angular.directive";

const COMPONENTS = [CardComponent];
const DIRECTIVES = [];
// For some reason, declaring here and importing in app.module doesnt work
// const DIRECTIVES = [ThisIsAngularDirective];

@NgModule({
    imports: [CommonModule],
    declarations: [...COMPONENTS, ...DIRECTIVES],
    exports: [CommonModule, ...COMPONENTS, ...DIRECTIVES]
})
export class SharedModule {}