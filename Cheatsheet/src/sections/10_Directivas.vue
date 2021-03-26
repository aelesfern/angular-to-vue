<template lang="pug">
  app-section
    template(slot="header") Directivas
    template(slot="col-angular")
      pre
        code.lang-js.
          import { Directive, ElementRef, TemplateRef, ViewContainerRef } from "@angular/core";

          @Directive({ selector: '[encebollado]'})
          export class EncebolladoDirective {
            constructor(private elementRef: ElementRef){}
            
            encebollado() {
              this.elementRef.nativeElement.innerHTML = `<div>${this.elementRef.nativeElement.innerHTML} con cebolla</div>`;
            }
          }
      ul
        li Permiten añadir comportamientos nuevos a componentes y etiquetas html
        li @angular/core ofrece un set de directivas que cubren las necesidades más habituales (ngFor, ngIf, etc...)
    template(slot="col-vue")
      pre
        code.lang-js.
          Vue.directive('encebollado', { // Registra una directiva global llamada v-encebollado
            inserted: function(el) {
              el.nativeElement.innerHTML = `<div>${el.nativeElement.innerHTML} con cebolla</div>`;
            }
          });
      ul
        li Son muy parecidas a las de Angular, aunque no hacen diferencia entre las de atributo y las estructurales
        li Pueden asociarse a ciertos eventos del componente o etiqueta usados
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
