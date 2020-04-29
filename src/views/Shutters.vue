<template>
  <div class="wrapper">
    <Jarallax
      image="/images/persianas.jpg"
      :name="$t('shutters')"
    ></Jarallax>

    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/persianas/montante-enfundar">
                  <img src="/images/madera.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <router-link class="btn btn-new-white" to="/persianas/montante-enfundar">{{ $t('show_product') }}</router-link>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/persianas/montante-enfundar">
                  <h6 class="shop-item-title">{{ $t('plastic_stile') }}</h6>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/persianas/montante-remate">
                  <img src="/images/persianas2.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <router-link class="btn btn-new-white" to="/persianas/montante-remate">{{ $t('show_product') }}</router-link>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/persianas/montante-remate">
                  <h6 class="shop-item-title">{{ $t('wooden_stile') }}</h6>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/persianas/lamas">
                  <img src="/images/persianas3.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <router-link class="btn btn-new-white" to="/persianas/lamas">{{ $t('show_product') }}</router-link>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/persianas/lamas">
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
import Jarallax from '@/components/Jarallax.vue'

export default {
  name: 'shutters',
  components: {
    EndOfTheRoad,
    Jarallax
  }
}
</script>
