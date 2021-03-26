<template lang="pug">
  app-section
    template(slot="header") Servicios
    template(slot="col-angular")
      pre
        code.lang-html.
          import { Injectable } from "@angular/core";
          import { HttpClient } from "@angular/common/http";

          @Injectable({providedIn: 'root'})
          export class UserService {
            private users: any[] = [];

            constructor(private httpService: HttpClient) { }

            getUsers() {
              return this.httpService.get(url).pipe(
                first(),
                tap(users => this.users = users)
              );
            }
          }
      ul
        li Pensados para proveeder lógica específica a una funcionalidad no relacionada directamente con la representación visual
        li Estan dentro del sistema de inyección de dependencias, lo que permite crear código modular organizando jerarquicamente
        li Puesto que su lógica no debe ser específica a una vista por defecto son Singletons compartidos por la aplicación
        li Pueden crearse multiples instancias del mismo servicio para casos de uso poco habituales
    template(slot="col-vue")
      pre
        code.lang-js.
          let users = [];

          export default {
            getUsers() {
              return fetch(url).then(newUsers => {
                users = newUsers;
                return users;
              });
            }
          }
      ul
        li No existe una pieza definida como servicio
        li Usando VanillaJS puede crearse un análogo a los servicios singleton
        li Vue ofrece como alternativa para crear código reutilizable por múltiples componentes los Mixins
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
