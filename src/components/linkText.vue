<template lang="pug">
  .linkTextDefault
    #link(@click=`transitionPage`) {{buttonTitle}}
</template>

<script lang="ts">
import { Vue, Prop, Component } from "nuxt-property-decorator";

@Component({
  name: "linkText",
})
export default class extends Vue {
  @Prop({ default: "" }) toPagePath!: string;
  @Prop({ default: "" }) buttonTitle!: string;

  private transitionPage(): void {
    this.$router.push(`${this.toPagePath}`);
  }
}
</script>

<style>
.linkTextDefault {
  display: inline-block;
}

#link {
  font-weight: 900;
  font-size: 150%;
  color: black;
  padding: 10px;
  transition: all 0.3s ease;
}

#link:hover {
  font-size: 200%;
  color: deeppink;
  padding: 0px 10px 0px;
  transition: all 0.3s ease;
}
</style>
