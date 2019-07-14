<template>
  <div class="wrapper">
    <Jarallax
      image="/images/home_header.jpg"
      :name="$t('shutters')"
    ></Jarallax>

    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/shutters/plastic-stile">
                  <img src="/images/shop/1.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <a class="btn btn-new-white" href="#">{{ $t('show_product') }}</a>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/shutters/plastic-stile">
                  <h6 class="shop-item-title">{{ $t('plastic_stile') }}</h6>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/shutters/wooden-stile">
                  <img src="/images/shop/1.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <a class="btn btn-new-white" href="#">{{ $t('show_product') }}</a>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/shutters/wooden-stile">
                  <h6 class="shop-item-title">{{ $t('wooden_stile') }}</h6>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/shutters/slats">
                  <img src="/images/shop/1.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <a class="btn btn-new-white" href="#">{{ $t('show_product') }}</a>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/shutters/slats">
                  <h6 class="shop-item-title">{{ $t('slats') }}</h6>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <EndOfTheRoad></EndOfTheRoad>
  </div>
</template>

<script>
import EndOfTheRoad from '@/components/EndOfTheRoad.vue'
import Jarallax from "@/components/Jarallax.vue"

export default {
  name: 'shutters',
  components: {
    EndOfTheRoad,
    Jarallax
  }
}
</script>
