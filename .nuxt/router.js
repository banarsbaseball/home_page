import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e9ecf55c = () => interopDefault(import('..\\src\\pages\\introduction\\index.vue' /* webpackChunkName: "pages/introduction/index" */))
const _194c8b88 = () => interopDefault(import('..\\src\\pages\\operator\\index.vue' /* webpackChunkName: "pages/operator/index" */))
const _dbf70896 = () => interopDefault(import('..\\src\\pages\\schedule\\index.vue' /* webpackChunkName: "pages/schedule/index" */))
const _3a17a2c2 = () => interopDefault(import('..\\src\\pages\\operator\\login.vue' /* webpackChunkName: "pages/operator/login" */))
const _213e48ac = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/introduction",
    component: _e9ecf55c,
    name: "introduction"
  }, {
    path: "/operator",
    component: _194c8b88,
    name: "operator"
  }, {
    path: "/schedule",
    component: _dbf70896,
    name: "schedule"
  }, {
    path: "/operator/login",
    component: _3a17a2c2,
    name: "operator-login"
  }, {
    path: "/",
    component: _213e48ac,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
