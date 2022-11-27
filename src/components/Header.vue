<template lang="pug"> 
.header
  .headerLogo
    img(src="../static/image/banarsTop.jpg")
  .headerlinkText
    linkText#header(:buttonTitle = "buttonTitle_1" :toPagePath = `toPagePath_1`)
    linkText#header(:buttonTitle = `buttonTitle_2` :toPagePath = `toPagePath_2`)
    linkText#header(:buttonTitle = `buttonTitle_3` :toPagePath = `toPagePath_3`)
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import linkText from "../components/linkText.vue";

@Component({
  components: {
    linkText,
  },
})
export default class extends Vue {
  private buttonTitle_1: string = "ホーム";
  private buttonTitle_2: string = "選手紹介";
  private buttonTitle_3: string = "試合日程";
  private toPagePath_1: string = "/";
  private toPagePath_2: string = "/introduction";
  private toPagePath_3: string = "/schedule";
}
</script>

<style>
.header {
  background-color: burlywood;
}

.headerlinkText {
  text-align: right;
}

.headerLogo {
  padding: 0px 0px 0px 10px;
  text-align: left;
  float: left;
}

.headerLogo img {
  width: 70px;
}

.linkTextDefault#header {
  padding: 10px 40px 10px 0px;
}
</style>
