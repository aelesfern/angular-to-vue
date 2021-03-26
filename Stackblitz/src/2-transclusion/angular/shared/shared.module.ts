import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";

const COMPONENTS = [CardComponent];

@NgModule({
    imports: [CommonModule],
    declarations: [...COMPONENTS],
    exports: [CommonModule, ...COMPONENTS]
})
export class SharedModule {}