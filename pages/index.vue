<template lang="pug">
.top
  .p#top バナーズのトップページです
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style>
.top {
  background-size: cover;
  background-position: center top;
}
#top {
  background-image: url(../image/top.jpg);
  min-height: 100vh;
}
</style>