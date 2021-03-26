<template lang="pug">
  app-section
    template(slot="header") Instancia
    template(slot="col-angular")
      pre
        code.lang-js.
          import { enableProdMode } from '@angular/core';
          import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
          import { AppModule } from './app/app.module';
          import { environment } from './environments/environment';

          if (environment.production) {
            enableProdMode();
          }

          platformBrowserDynamic().bootstrapModule(AppModule)
            .catch(err => console.error(err));
      ul
        li Por defecto sólo puede haber una instancia Angular en ejecución
        li El módulo usado para la instancia alberga la configuración global de la aplicación, pero ciertas partes pueden compartirse facilmente usando módulos intermedios
    template(slot="col-vue")
      pre
        code.lang-js.
          var app = new Vue({
            el: '#app',
            data: {
              message: 'Hola Vue!'
            },
            components: {
              'app-button': AppButton
            }
          })
      ul
        li Esta pensado para ser extendido con plugins (@vue/cli-plugin-xxx) y no tocar webpack
        li No tiene comandos para crear nuevas piezas, como por ejemplo componentes
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
