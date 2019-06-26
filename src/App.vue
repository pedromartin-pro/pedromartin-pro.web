<template>
  <div id="app">
    <Menu></Menu>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Footer
  }
}
</script>
