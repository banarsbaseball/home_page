<template lang="pug">
  .operatorLogin
    .nameField
      label(for="name") name: 
      input#name(type="text" name="name" v-model=`inputName`)
    .passwordField
      label(for="password") password: 
      input#password(type="password" name="password" v-model=`inputPassword`)
    .loginButton
      button(type="submit" @click=`login`) ログイン
</template>

<script lang="ts">
import { Vue, Component, namespace } from "nuxt-property-decorator";

const OPERATOR = namespace("pages/operator");

@Component({
  components: {},
})
export default class extends Vue {
  @OPERATOR.Getter("operatorSecretData") operatorSecretData: any;

  private inputName: string = "";
  private inputPassword: string = "";

  private login() {
    if (this.authenticate()) {
      this.$router.push("/operator");
    } else {
      console.log("入力値が不正です");
    }
  }

  private authenticate(): boolean {
    for (const operator of this.operatorSecretData.password.operator) {
      if (this.inputName === operator.name) {
        if (this.inputPassword === operator.pass) return true;
      }
    }
    return false;
  }
}
</script>

<style>
.operatorLogin {
  padding: 30px;
}
</style>
