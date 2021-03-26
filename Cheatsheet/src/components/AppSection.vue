<template lang="pug">
  section
    header
      h2
        slot(name="header")
    div.col-angular
      slot(name="col-angular")
    div.col-vue
      slot(name="col-vue")
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
section {
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 70px;

  header {
    flex: 1 1 100%;
    margin-bottom: 20px;
    margin: 0 24px;
    font-size: 1.875rem;
    font-weight: 700;
    display: flex;
    justify-content: center;

    h2 {
      display: inline;
      background-color: rgb(80, 80, 80);
      padding: 10px 20px;
      min-width: 200px;
      text-align: center;
    }
  }
  .col-angular,
  .col-vue {
    flex: 1 1 0%;
    margin: 0 24px;
    max-width: 45%;
  }
  .col-vue {
    color: #017EB6;
  }
  
}
</style>
