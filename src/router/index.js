import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '@/i18n'
import Home from '@/views/Home.vue'
import Rod from '@/views/Rod.vue'
import Shutters from '@/views/Shutters.vue'
import Tailored from '@/views/Tailored.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Error404 from '@/views/Error404.vue'
import RodFood from '@/views/products/RodFood.vue'
import RodPyrotechnics from '@/views/products/RodPyrotechnics.vue'
import ShutterPlasticStile from '@/views/products/ShutterPlasticStile.vue'
import ShutterWoodenStile from '@/views/products/ShutterWoodenStile.vue'
import ShutterSlat from '@/views/products/ShutterSlat.vue'

Vue.use(VueRouter)

const router = new VueRouter({
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
      path: '/varillas',
      name: 'rods',
      component: Rod,
      meta: { title: 'rods' }
    },
    {
      path: '/varillas/alimentacion',
      name: 'food-rods',
      component: RodFood,
      meta: { title: 'rod_food' }
    },
    {
      path: '/varillas/pirotecnia',
      name: 'food-pirotecnia',
      component: RodPyrotechnics,
      meta: { title: 'rod_pyro' }
    },
    {
      path: '/persianas',
      name: 'shutters',
      component: Shutters,
      meta: { title: 'shutters' }
    },
    {
      path: '/persianas/montante-enfundar',
      name: 'plastic-stile',
      component: ShutterPlasticStile,
      meta: { title: 'plastic_stile' }
    },
    {
      path: '/persianas/montante-remate',
      name: 'wooden-stile',
      component: ShutterWoodenStile,
      meta: { title: 'wooden_stile' }
    },
    {
      path: '/persianas/lamas',
      name: 'slats',
      component: ShutterSlat,
      meta: { title: 'slats' }
    },
    {
      path: '/a-medida',
      name: 'tailored',
      component: Tailored,
      meta: { title: 'tailored' }
    },
    {
      path: '/sobre-nostros',
      name: 'about',
      component: About,
      meta: { title: 'about_us' }
    },
    {
      path: '/contacto',
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
