<template lang="pug">
  app-section
    template(slot="header") Routing
    template(slot="col-angular")
      ul
        li La configuración del routing puede dividirse en módulos
        li Pueden configurarse Guards asociados a rutas para controlar el acceso a las mismas
    template(slot="col-vue")
      ul
        li Ofrece una librería cuyo uso es similar a @angular/routing, para la que existe una documentación detallada
        li La configuración del routing se aglutina en un único archivo
        li Los Guards pueden definirse a nivel de ruta, y también a nivel de componente
        li Puede separarse código en diferentes archivos para carga vaga usando imports en la configuración del enrutado
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
