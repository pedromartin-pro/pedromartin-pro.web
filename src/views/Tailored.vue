<template>
  <div class="wrapper">
    <Jarallax
      image="/images/machine1.jpg"
      :name="$t('tailored')"
    ></Jarallax>

    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-9 m-auto text-center">
            <h2>{{ $t('what_do_you_need') }}</h2>
            <p>{{ $t('what_do_you_need_extended') }}.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="icon-box text-center">
              <div class="icon-box-icon">
                <i class="fas fa-envelope-square"></i>
              </div>
              <div class="icon-box-title">
                <h6>
                  <a href="mailto:hola@pedromartin.pro">hola@pedromartin.pro</a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="icon-box text-center">
              <div class="icon-box-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="icon-box-title">
                <h6 class="d-block d-lg-none">
                  <a href="tel:+34627534662">+34 627534662</a>
                </h6>
                <h6 class="d-none d-lg-block">+34 627534662</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Jarallax from '@/components/Jarallax.vue'

export default {
  name: 'tailored',
  components: {
    Jarallax
  }
}
</script>
