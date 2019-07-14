<template>
  <div class="wrapper">
    <Jarallax
      image="/images/duruelo_de_la_sierra.jpg"
      :name="$t('about_us')"
    ></Jarallax>

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
import Jarallax from "@/components/Jarallax.vue"

export default {
  name: 'home',
  components: {
    OurWork,
    Jarallax
  }
}
</script>
