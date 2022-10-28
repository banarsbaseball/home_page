<template lang="pug">
  .footer {{mailAddress}}
</template>

<script lang="ts">
import { Vue } from "nuxt-property-decorator";

export default class extends Vue {
  private mailAddress: string = "banarsbaseball89@gmail.com";
}
</script>

<style>
.footer {
  background-color: burlywood;
  padding: 10px;
  font-weight: 700;
  text-align: center;
}
</style>
