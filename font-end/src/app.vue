<template>
    <div id="text">{{text}}</div>
</template>

<script>
export default {
  data() {
    return {
      text: "vue + stylus"
    };
  }
};
</script>

<style lang="stylus">
body
    color red
    background-image url('./assets/images/[fox]wallls.com_179505.jpg')

</style>
