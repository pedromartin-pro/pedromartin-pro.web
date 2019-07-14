<template>
  <div class="home">
    <!-- Wrapper-->
    <div class="wrapper">
      <HomeJarallax></HomeJarallax>

      <!-- Products-->
      <section id="main-products" class="module">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <router-link to="/rods">
                <div class="timeline-card">
                  <div class="timeline-card-preview">
                    <img src="/images/rods.jpg" alt />
                  </div>
                  <div class="timeline-card-body">
                    <h4>{{ $t('rod_or_rod') }}</h4>
                    <p>{{ $t('rod_or_rod_explained') }}.</p>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6">
              <router-link to="/shutters">
                <div class="timeline-card">
                  <div class="timeline-card-preview">
                    <img src="/images/shutters.jpg" alt />
                  </div>
                  <div class="timeline-card-body">
                    <h4>{{ $t('shutters') }}</h4>
                    <p>{{ $t('shutters_explained') }}.</p>
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
              <br />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="space" data-m-y="60px"></div>
            </div>
          </div>
          <OurWork></OurWork>
        </div>
      </section>
      <!-- Feature end-->
    </div>
    <!-- Wrapper end-->
  </div>
</template>

<script>
import Tailored from '@/components/Tailored.vue'
import OurWork from '@/components/OurWork.vue'
import HomeJarallax from '@/components/HomeJarallax.vue'

export default {
  name: 'home',
  components: {
    Tailored,
    OurWork,
    HomeJarallax
  }
}
</script>
