<template lang="pug">
  app-section
    template(slot="header") Componentes
    template(slot="col-angular")
      pre
        code.lang-js.
          @Component({
            selector: 'app-user-list', // Selector para uso en HTML
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.scss'],
          })
          export class AppUserList implements OnChanges {
            users: any[] = [];
            @Output() userRemoved: EventEmitter<any> = new EventEmitter(); // Salida de datos
            lastViewedUser: any; // Datos propios

            userQuantity() { // Datos calculados
              return this.users.length;
            }
            ngOnChanges(changes: SimpleChanges) { // Reacción a cambios
              changes.users && console.log(changes.users.currentValue.length);
            }
            removeUser(user: any) { // Método
              this.userRemoved.emit(user);
            }
          }
      ul
        li Se centran en la lógica relacionada con la representación visual
        li Puede tener su CSS y HTML en archivos únicos o incluidos en el archivo .component
    template(slot="col-vue")
      pre
        code.lang-js.
          // Componente .js
          export default {
            name: 'AppUserList', // Selector para uso en HTML
            components: { // Registro de componentes locales
              AppUser
            },
            template: `&lt;div&gt;...`, // Vista
            data: function() { // Datos propios
              return {
                lastViewedUser: undefined
              }
            },
            props: { // Parámetros de entrada
              users: {
                type: array,
                required: true,
                validator: users =&gt; users.length &gt; 0
              }
            },
            computed: { // Datos calculados
              userQuantity: () =&gt; this.users.length
            },
            watch: { // Reacción a cambios
              users: (oldValue, newValue) =&gt; console.log(newValue.length)
            },
            methods: { // Métodos
              removeUser: (user) =&gt; this.$emit('userRemoved', user) // Datos de salida
            }
          }

          // Componente .vue en multiples archivos
          &lt;template src="..."&gt;&lt;/template&gt; // Vista
          &lt;script&gt;
          export default {
            name: 'AppUserList', // Selector para uso en HTML
            ...
          }
          &lt;/script&gt;
          &lt;style scoped src="..."&gt;&lt;/style&gt; // Estilos
      ul
        li La aplicación se divide en componentes, sin usar necesariamente otras estructuras
        li Puede condificarse en un archivo .js con el HTML incluido y sin CSS (pobre soporte de IDEs)
        li Puede codificarse en un archivo .vue que incluye CSS y HTML en etiquetas style y template, exportables a ficheros independientes
        li El HTML requiere que la primera etiqueta no tenga hermanos
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
