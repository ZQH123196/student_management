<template>
    <h2>{{ info }}
        <router-view></router-view>
    </h2>
</template>

<script>
export default {
  data: function() {
    return {
      info: "Student"
    };
  }
};
</script>

<style>
</style>
