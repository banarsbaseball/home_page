<template lang="pug">
.div
</template>

<script lang="ts">
import { Component, Vue} from "nuxt-property-decorator"

@Component({
  name: "schedule"
})

export default class extends Vue{

}
</script>

<style>
  .schedule {
    background-size: cover;
    background-position: center;
    background-image: url(../../static/image/schedule.jpg);
    min-height: 100vh;
  }
</style>