<template lang="pug">
  app-section
    template(slot="header") Componentes - Proyección de contenido/Transclusión
    template(slot="col-angular")
      pre
        code.lang-html.
          &lt;!--Card Component --&gt;
          &lt;div class="header"&gt;{{title}}&lt;/div&gt;
          &lt;div class="content"&gt;
            &lt;ng-content select="slot-content"&gt;&lt;/ng-content&gt;
          &lt;/div&gt;
          &lt;div class="footer"&gt;
            &lt;ng-content select="slot-footer"&gt;&lt;/ng-content&gt;
          &lt;/div&gt;

          &lt;!-- Uso de los slots --&gt;
          &lt;card-component title="La noticia del día"&gt;
            &lt;p slot-content&gt;¿Con o sin cebolla? La polémica que interesa a nadie.&lt;/p&gt;
            &lt;p slot-footer&gt;Artículo de El Comedista&lt;/p&gt;
          &lt;/card-component&gt;
    template(slot="col-vue")
      pre
        code.lang-html.
          &lt;!--Card Component --&gt;
          &lt;div&gt;
            &lt;div class="header"&gt;{{title}}&lt;/div&gt;
            &lt;div class="content"&gt;
            &lt;slot name="content"&gt;&lt;/slot&gt;
            &lt;/div&gt;
            &lt;div class="footer"&gt;
            &lt;slot name="footer"&gt;&lt;/slot&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;!-- Uso de los slots --&gt;
          &lt;card-component title="La noticia del día"&gt;
            &lt;p slot="content"&gt;¿Con o sin cebolla? La polémica que interesa a nadie.&lt;/p&gt;
            &lt;p slot="footer"&gt;Artículo de El Comedista&lt;/p&gt;
          &lt;/card-component&gt;
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
