import { Component } from "@angular/core";

@Component({
    selector: 'app-vue',
    template: `
    <p>"Estamos" en Vue</p>
    <button routerLink="/angular">Ir a Angular</button>
  `
})
export class VueComponent {}