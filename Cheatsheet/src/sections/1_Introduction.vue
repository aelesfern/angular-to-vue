<template lang="pug">
  app-section
    template(slot="header") Introducción
    ul(slot="col-angular")
      li Ofrece una solución completa para la mayoría de las necesidades de una aplicación web
      li En su estructura y documentación presta mucha importancia a la estandarización
      li Está totalmente integrado con Typescript y Rxjs
      li Suele utilizarse Ngrx como librería para implementar arquitectura Redux
    ul(slot="col-vue")
      li Su core se centra en la capa de presentación para que sea mas sencillo trabajar con el
      li El uso de Typescript es opcional
      li No esta integrado con Rxjs, aunque ofrece una librería para su integración (poco mantenida)
      li Ofrece un mejor rendimiento (datos actuales no encontrados)
      li Suele utilizarse Vuex como librería para implementar arquitectura Redux
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
