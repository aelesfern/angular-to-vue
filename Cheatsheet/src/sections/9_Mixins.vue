<template lang="pug">
  app-section
    template(slot="header") Mixins de Vue
    template(slot="col-vue")
      pre
        code.lang-js.
          // Mixin
          var myMixin = {
            created: () => this.hello(),
            methods: {
              hello: () => console.log('hola desde el mixin!')
            }
          }

          // Componente que usa el mixin
          var Component = Vue.extend({
            mixins: [myMixin]
          })

          var component = new Component() // => "hola desde el mixin!"
      ul
        li Son utilizados para abstraer una lógica de un componente y hacerla re-utilizable
        li Un mixin es una configuración de componente, parcial o no
        li Al usar un mixin, un componente integra su configuración como propia
        li Un componente puede utilizar múltiples mixins
        li Un mixin puede a su vez utilizar otros mixins
        li Pueden registrarse mixins de forma global. Todos los componentes tendrán esé código, lo usen o no
        li Recomendación: utilizar con moderación, su uso puede dificultar la comprensión de una base de código de gran tamaño
        li Recomendación: al diseñarlos sigue siempre el principio de responsabilidad única
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
