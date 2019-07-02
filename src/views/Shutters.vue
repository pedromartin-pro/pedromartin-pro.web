<template>
  <div class="wrapper">
    <section class="module-cover parallax text-center" data-background="images/module-2.jpg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Persiana</h2>
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <router-link to="/">Inicio</router-link>
              </li>
              <li class="breadcrumb-item active">Persiana</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="overlay-background" style="opacity: 0.6;"></div>
    </section>

    <!-- Shop Grid-->
    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <a href="montante-enfundar-plastico.html">
                  <img src="/images/shop/1.jpg" alt>
                </a>
                <div class="shop-item-hidden">
                  <a class="btn btn-new-white" href="#">Ver producto</a>
                </div>
              </div>
              <div class="shop-item-captions">
                <a href="montante-enfundar-plastico.html">
                  <h6 class="shop-item-title">Montante de enfundar para persiana de plástico</h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <a href="montante-remate-madera.html">
                  <img src="/images/shop/1.jpg" alt>
                </a>
                <div class="shop-item-hidden">
                  <a class="btn btn-new-white" href="#">Ver producto</a>
                </div>
              </div>
              <div class="shop-item-captions">
                <a href="montante-remate-madera.html">
                  <h6 class="shop-item-title">Montante de remate para persiana de madera</h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <a href="lamas.html">
                  <img src="/images/shop/1.jpg" alt>
                </a>
                <div class="shop-item-hidden">
                  <a class="btn btn-new-white" href="#">Ver producto</a>
                </div>
              </div>
              <div class="shop-item-captions">
                <a href="lamas.html">
                  <h6 class="shop-item-title">Lamas</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Shop Grid end-->

    <EndOfTheRoad></EndOfTheRoad>
  </div>
</template>

<script>
import EndOfTheRoad from '@/components/EndOfTheRoad.vue'

export default {
  name: 'shutters',
  components: {
    EndOfTheRoad
  }
}
</script>
