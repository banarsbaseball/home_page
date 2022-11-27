import { VuexModule, Module, getter, mutation } from "vuex-class-component";

@Module({ namespacedPath: "pages/operator"})
class Store extends VuexModule {
  
  @getter operatorSecretData: object = {}

  @mutation
  public SET_OPERATOR_SECRET_DATA(payload: any) {
    this.operatorSecretData = payload
  }
}

export default Store.ExtractVuexModule(Store)