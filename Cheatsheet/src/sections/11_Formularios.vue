<template lang="pug">
  app-section
    template(slot="header") Formularios
    template(slot="col-angular")
      pre
        code.lang-js.
          import { Component } from '@angular/core';
          import { FormGroup, FormControl } from '@angular/forms';

          @Component({
            selector: 'app-user-edit',
            template: `
            &lt;form [formGroup]="userForm"&gt;
            &lt;label&gt;
            First Name:
            &lt;input type="text" formControlName="firstName"&gt;
            &lt;/label&gt;
            &lt;label&gt;
            Last Name:
            &lt;input type="text" formControlName="lastName"&gt;
            &lt;/label&gt;
          &lt;/form&gt;
            `
          })
          export class UserEditComponent {
            userForm = new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            });
          }
      ul
        li Tiene dos soluciones para realizar formularios según su complejidad (reactivos o por plantilla)
        li Crear inputs personalizados para su uso en formularios reactivos requiere implementar una interfaz relativamente compleja
    template(slot="col-vue")
      pre
        code.lang-js.
          &lt;template&gt;
            &lt;form&gt;
              &lt;label&gt;
                First Name:
                &lt;input type="text" v-model="firstName"&gt;
              &lt;/label&gt;
              &lt;label&gt;
                Last Name:
                &lt;input type="text" v-model="lastName"&gt;
              &lt;/label&gt;
            &lt;/form&gt;
          &lt;/template&gt;

          &lt;script&gt;
          export default {
            name: 'user-edit-component',
            data: function() {
              return {
                firstName: '',
                lastName: ''
              }
            }
          }
          &lt;/script&gt;
      ul
        li Se limita a ofrecer una directiva para ofrecer vinculación doble de datos
        li Ofrece modificadores para las tareas más habituales
        li Crear inputs personalizados para su uso con esta directiva requiere el uso de dos propiedades habituales de los componentes
        li Existen varias librerías consolidadas que dan soporte a funcionalidades para formularios mas avanzadas
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
