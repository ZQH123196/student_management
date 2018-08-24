<template>
  <div id="text">
    {{text}}
    <br>
    <router-link to="/">/</router-link>
    <br>
    <router-link to="/login">/login</router-link>
    <br>
    <router-link to="/login/student">/login/student</router-link>
    <br>
    <router-link to="/login/teacher">/login/teacher</router-link>
    <br>
    <router-link to="/rootManage">/rootManage</router-link>
    <br>
    <router-view></router-view>
  </div>

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
body {
  color: red;
  background-image: url('./assets/images/[fox]wallls.com_179505.jpg');
}
</style>
