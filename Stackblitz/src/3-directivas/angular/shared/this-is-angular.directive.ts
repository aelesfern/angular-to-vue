import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector:"[thisIsAngular]"
})
export class ThisIsAngularDirective implements AfterViewInit{
    @Input() px: string;
    @Input('border-style') borderStyle: string;
    
    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
      this.el.nativeElement.style.border = `${this.px}px ${this.borderStyle} red`;
      this.el.nativeElement.style['border-radius'] = '20px';
    }
}