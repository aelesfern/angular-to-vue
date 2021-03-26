<template lang="pug">
  app-section
    template(slot="header") Componentes - Proyección de contenido/Transclusión
    template(slot="col-angular")
      pre
        code.lang-html.
          &lt;ul *ngIf="users; else noUsers"&gt;
          &lt;app-user *ngFor="let user of users; let i=index" [user]="user"&gt;&lt;/app-user&gt;
          &lt;ng-template #noUsers&gt;&lt;p&gt;No hay usuarios&lt;/p&gt;&lt;/ng-template&gt;
          &lt;/ul&gt;
          &lt;input [(ngModel)]="newUserName"&gt;
    template(slot="col-vue")
      pre
        code.lang-html.
          &lt;div&gt;
          &lt;ul v-If="users"&gt;
            &lt;app-user v-for="(user, index) in users" :key="user.id" :user="user"&gt;{{index}}&lt;/app-user&gt;
          &lt;/ul&gt;
          &lt;p v-else&gt;No hay usuarios&lt;/p&gt;
          &lt;input [(ngModel)]="newUserName"&gt;
          &lt;/div&gt;
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
