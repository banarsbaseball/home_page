<template lang="pug">
  .footer {{mailAddress}}
    .operatorLink
      linkText(:buttonTitle = "linkTitle" :toPagePath = `toOperatorPagePath`)
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import linkText from "../components/linkText.vue";

@Component({
  components: {
    linkText,
  },
})
export default class extends Vue {
  private mailAddress: string = "banarsbaseball89@gmail.com";
  private toOperatorPagePath: string = "/operator/login";
  private linkTitle: string = "管理者サインイン";
}
</script>

<style>
.footer {
  background-color: burlywood;
  padding: 10px;
  font-weight: 700;
  text-align: center;
}

.operatorLink {
  text-align: right;
}
</style>
