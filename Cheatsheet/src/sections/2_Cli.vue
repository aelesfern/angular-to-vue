<template lang="pug">
  app-section
    template(slot="header") CLI
    ul(slot="col-angular")
    ul(slot="col-vue")
      li Esta pensado para ser extendido con plugins (@vue/cli-plugin-xxx) y no tocar webpack
      li No tiene comandos para crear nuevas piezas, como por ejemplo componentes
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
