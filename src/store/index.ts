import fs from "fs"

export const actions = {
  nuxtServerInit({ commit }: { commit: any }) {
    const secretJsonLow = fs.readFileSync("src/input/secret.json", "utf8");
    commit("pages/operator/SET_OPERATOR_SECRET_DATA", JSON.parse(secretJsonLow))
  }
}