<template>
  <div id="app">
    <MainMenu></MainMenu>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    MainMenu,
    Footer
  }
}
</script>
