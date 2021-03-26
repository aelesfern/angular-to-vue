<template lang="pug">
  app-section
    template(slot="header") Módulos
    template(slot="col-angular")
      pre
        code.lang-js.
          import { NgModule } from '@angular/core';
          import { BrowserModule } from '@angular/platform-browser';
          import { AppRoutingModule } from './app-routing.module';
          import { AppComponent } from './app.component';

          @NgModule({
            declarations: [
            AppComponent
            ],
            imports: [
            BrowserModule,
            AppRoutingModule
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
          export class AppModule { }
      ul
        li Se utiliza para configurar el inyector de dependencias y el compilador
        li Ayuda a jerarquizar y encapsular el código
    ul(slot="col-vue")
      li No existe el concepto de módulo
      li No existe el inyector de dependencias
      li El código se jerarquiza en la instancia Vue, componentes globales y la propia jerarquia de componentes
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
