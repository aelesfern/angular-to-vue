import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { VueComponent } from "./vue.component";

@NgModule({
    declarations: [VueComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: VueComponent}
        ])
    ]
})
export class VueModule {}