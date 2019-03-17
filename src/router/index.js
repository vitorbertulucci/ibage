import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'
Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: (to, from, savedPosition) => {
      const PATHS = [ '/tecnologia-e-inovacao', '/treinamentos-e-capacitacao' ]
      let s = store()
      if (PATHS.indexOf(from.path) !== -1) {
        // let el = document.getElementById('products-and-services')
        // let correctionValue = window.innerWidth <= 640 ? 65 : 90
        // let offset = el.offsetTop - correctionValue
        // debounce(() => window.scrollTo(0, offset), 200)
        return { y: s.getters['scrollPosition/getPosition'] }
        // let duration = 500
        // setScrollPosition(target, offset, duration)
      }
      return { y: 0 }
    },
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
