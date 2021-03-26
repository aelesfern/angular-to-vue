<template lang="pug">
  div#app.flex.flex-col.justify-center.m-20
    h1.text-5xl.font-bold Angular VS Vue
    div.m-0.max-w-screen-lg.relative
      div.absolute.flex.top-0.left-0.bottom-0.right-0(style="z-index: -1")
        div.angular-bg.rounded-tl-3xl
        div.vue-bg.rounded-tr-3xl
      article.flex.flex-col
        introduction
        cli
        instancia
        modulos
</template>

<script>
export default {};
</script>

<style lang="scss">
html {
  color: #e6e6e6;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}
.angular-bg {
  background: transparent linear-gradient(190deg, #0c98d6 0%, #036b9a 100%) 0%
    0% no-repeat padding-box;
  opacity: 0.9;
  flex: 1 1 0%;
}
.vue-bg {
  background-color: #c9c9c9;
  flex: 1 1 0%;
}
</style>
