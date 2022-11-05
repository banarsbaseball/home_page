import fs from "fs"

export const actions = {
  nuxtServerInit(commit: any) {
    const secretJsonLow = fs.readFileSync("input/secret.json", "utf8");
    commit("pages/operator/SET_OPERATOR_SECRET_DATA", JSON.parse(secretJsonLow))
  }
}