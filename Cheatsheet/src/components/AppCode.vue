<template lang="pug">
    pre
      code(:class="'lang-' + lang")
        slot
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: "js",
    },
  },
};
</script>

<style scoped lang="scss"></style>
