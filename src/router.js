import i18n from './i18n'

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rod from './views/Rod.vue'
import Shutters from './views/Shutters.vue'
import Tailored from './views/Tailored.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Error404 from './views/Error404.vue'
import RodFood from './views/products/RodFood.vue'
import RodPyrotechnics from './views/products/RodPyrotechnics.vue'
import ShutterPlasticStile from './views/products/ShutterPlasticStile.vue'
import ShutterWoodenStile from './views/products/ShutterWoodenStile.vue'
import ShutterSlat from './views/products/ShutterSlat.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'wood_experts' }
    },
    {
      path: '/rods',
      name: 'rods',
      component: Rod,
      meta: { title: 'rods' }
    },
    {
      path: '/rods/food',
      name: 'food-rods',
      component: RodFood,
      meta: { title: 'rod_food' }
    },
    {
      path: '/rods/pyrotechnics',
      name: 'food-pyrotechnics',
      component: RodPyrotechnics,
      meta: { title: 'rod_pyro' }
    },
    {
      path: '/shutters',
      name: 'shutters',
      component: Shutters,
      meta: { title: 'shutters' }
    },
    {
      path: '/shutters/plastic-stile',
      name: 'plastic-stile',
      component: ShutterPlasticStile,
      meta: { title: 'plastic_stile' }
    },
    {
      path: '/shutters/wooden-stile',
      name: 'wooden-stile',
      component: ShutterWoodenStile,
      meta: { title: 'wooden_stile' }
    },
    {
      path: '/shutters/slats',
      name: 'slats',
      component: ShutterSlat,
      meta: { title: 'slats' }
    },
    {
      path: '/tailored',
      name: 'tailored',
      component: Tailored,
      meta: { title: 'tailored' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { title: 'about_us' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { title: 'contact' }
    },
    {
      path: '/*',
      name: 'error404',
      component: Error404,
      meta: { title: 'not_found' }
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const subtitle = `- ${i18n.t(to.meta.title) || ''}`
  document.title = `Pedro Martin ${subtitle}`
  next()
})

export default router
