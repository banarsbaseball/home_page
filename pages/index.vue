<template lang="pug">
.top
</template>

<script lang="ts">
import { Component, Vue} from "nuxt-property-decorator"
import linkText from "~/components/linkText.vue"

@Component({
  name: "index",
  layout: "default",
  components:{
    linkText
  }
})

export default class extends Vue{
  private buttonTitle: string = "試合日程"
  private toPagePath: string = "/schedule"

  private mounted() {
  }
}

</script>

<style>
.top {
  background-size: cover;
  background-position: center top;
  background-image: url(../static/image/top.jpg);
  min-height: 100vh;
}
</style>