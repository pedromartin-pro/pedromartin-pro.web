<template>
  <div class="wrapper">
    <Jarallax
      image="/images/home_header.jpg"
      :name="$t('rods')"
    ></Jarallax>

    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/rods/food">
                  <img src="/images/shop/1.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <a class="btn btn-new-white" href="#">{{ $t('show_product') }}</a>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/rods/food">
                  <h6 class="shop-item-title">{{ $t('rod_food') }}</h6>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/rods/pyrotechnics">
                  <img src="/images/shop/1.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <a class="btn btn-new-white" href="#">{{ $t('show_product') }}</a>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/rods/pyrotechnics">
                  <h6 class="shop-item-title">{{ $t('rod_pyro') }}</h6>
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
  name: 'rods',
  components: {
    EndOfTheRoad,
    Jarallax
  }
}
</script>
