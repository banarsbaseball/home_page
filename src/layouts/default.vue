<template lang="pug">
  .div
    Header
    nuxt
    Footer
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class extends Vue {}
</script>

<style></style>
