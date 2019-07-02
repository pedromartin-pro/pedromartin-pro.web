import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rod from './views/Rod.vue'
import Shutters from './views/Shutters.vue'
import Tailored from './views/Tailored.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Error404 from './views/Error404.vue'
import Product from './views/Product.vue'
import Product2 from './views/Product2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rods',
      name: 'rods',
      component: Rod,
    },
    {
      path: '/rods/food',
      name: 'food-rods',
      component: Product2
    },
    {
      path: '/shutters',
      name: 'shutters',
      component: Shutters
    },
    {
      path: '/tailored',
      name: 'tailored',
      component: Tailored
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/*',
      name: 'error404',
      component: Error404
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
