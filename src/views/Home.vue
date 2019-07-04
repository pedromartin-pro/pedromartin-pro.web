<template>
  <div class="home">
    <!-- Wrapper-->
    <div class="wrapper">
      <!-- Hero-->
      <section class="module-cover parallax text-center fullscreen" data-background="images/module-2.jpg">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="m-b-20">
                <strong>{{ $t('wood_experts') }}.</strong>
              </h1>
              <p class="m-b-40">
                {{ $t('wood50_1') }}<br>.{{ $t('wood50_2') }}
              </p>
              <p>
                <a class="btn btn-lg btn-circle btn-outline-new-white" href="#main-products">
                  {{ $t('our_products') }}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="overlay-background" style="opacity: 0.6;"></div>
      </section>
      <!-- Hero end-->

      <!-- Products-->
      <section id="main-products" class="module">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <router-link to="/rods">
                <div class="timeline-card">
                  <div class="timeline-card-preview">
                    <img src="/images/shop/1.jpg" alt>
                  </div>
                  <div class="timeline-card-body">
                    <h4>{{ $t('rod_or_rod') }}</h4>
                    <p>{{ $t('rod_or_rod_explained') }}.</p>
                    <p class="blue-link">{{ $t('show_rod_options') }}</p>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6">
              <router-link to="/shutters">
                <div class="timeline-card">
                  <div class="timeline-card-preview">
                    <img src="/images/shop/1.jpg" alt>
                  </div>
                  <div class="timeline-card-body">
                    <h4>{{ $t('shutters') }}</h4>
                    <p>{{ $t('shutters_explained') }}.</p>
                    <p class="blue-link">{{ $t('show_shutters_options') }}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <!-- Products end-->

      <section class="module bg-gray">
        <Tailored></Tailored>
      </section>

      <!-- Features-->
      <section class="module">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-9 m-auto text-center">
              <h1>{{ $t('our_work') }}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="space" data-m-y="60px"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="feature">
                <div class="feature-thumb">
                  <img src="/images/shop/1.jpg" alt>
                </div>
                <div class="feature-content">
                  <h6>{{ $t('cabinetmaker') }}</h6>
                  <p>{{ $t('cabinetmaker_explained') }}.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature">
                <div class="feature-thumb">
                  <img src="/images/shop/1.jpg" alt>
                </div>
                <div class="feature-content">
                  <h6>{{ $t('pine_wood') }}</h6>
                  <p>{{ $t('pine_wood_explained') }}.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature">
                <div class="feature-thumb">
                  <img src="/images/shop/1.jpg" alt>
                </div>
                <div class="feature-content">
                  <h6>{{ $t('quality_price') }}</h6>
                  <p>{{ $t('quality_price_explained') }}.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Feature end-->
    </div>
    <!-- Wrapper end-->
  </div>
</template>

<script>
import Tailored from '@/components/Tailored.vue'

export default {
  name: 'home',
  components: {
    Tailored
  }
}
</script>
