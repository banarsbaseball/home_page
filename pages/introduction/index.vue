<template lang="pug">
.introduction
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "introduction",
})
export default class extends Vue {}
</script>

<style>
.introduction {
  background-size: cover;
  background-position: center top;
  background-image: url(../../static/image/introduction.jpg);
  min-height: 100vh;
}
</style>
