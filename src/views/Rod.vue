<template>
  <div class="wrapper">
    <Jarallax
      image="/images/varillas.jpg"
      :name="$t('rods')"
    ></Jarallax>

    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/varillas/alimentacion">
                  <img src="/images/varillas6.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <router-link class="btn btn-new-white" to="/varillas/alimentacion">{{ $t('show_product') }}</router-link>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/varillas/alimentacion">
                  <h6 class="shop-item-title">{{ $t('rod_food') }}</h6>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/varillas/pirotecnia">
                  <img src="/images/varillas2.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <router-link class="btn btn-new-white" to="/varillas/pirotecnia">{{ $t('show_product') }}</router-link>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/varillas/pirotecnia">
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
import Jarallax from '@/components/Jarallax.vue'

export default {
  name: 'rods',
  components: {
    EndOfTheRoad,
    Jarallax
  }
}
</script>
