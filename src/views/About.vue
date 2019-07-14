<template>
  <div class="wrapper">
    <section class="module-cover parallax text-center" data-background="/images/duruelo_header.jpg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>{{ $t('about_us') }}</h2>
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <router-link to="/">{{ $t('home') }}</router-link>
              </li>
              <li class="breadcrumb-item active">{{ $t('about_us') }}</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="overlay-background" style="opacity: 0;"></div>
    </section>

    <!-- About-->
    <section class="module bg-gray p-t-0">
      <div class="container">
        <div class="row">
          <div class="col-md-10 m-auto">
            <div class="modal-video-container">
              <img src="/images/about_us_pedro_martin.jpg" alt="Pedro Martin">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About end-->

    <!-- Products-->
    <section class="module">
      <div class="container">
        <OurWork></OurWork>
      </div>
    </section>
  </div>
</template>

<script>
import OurWork from '@/components/OurWork.vue'

export default {
  name: 'home',
  components: {
    OurWork
  }
}
</script>
