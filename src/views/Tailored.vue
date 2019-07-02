<template>
  <div class="wrapper">
    <section class="module-cover parallax text-center" data-background="images/module-2.jpg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>A medida</h2>
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <router-link to="/">Inicio</router-link>
              </li>
              <li class="breadcrumb-item active">A medida</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="overlay-background" style="opacity: 0.6;"></div>
    </section>

    <section class="module p-b-20">
      <Tailored></Tailored>
    </section>

    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-9 m-auto text-center">
            <h2>Pídenos lo que necesitas.</h2>
            <p class="lead">Escríbenos un email o llamarnos por teléfono, cuéntanos que necesitas y te haremos un presupuesto lo antes posible.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="icon-box text-center">
              <div class="icon-box-icon">
                <span class="ti-email"></span>
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
                <span class="ti-headphone-alt"></span>
              </div>
              <div class="icon-box-title">
                <h6 class="d-block d-lg-none">
                  <a href="tel:+34975371XXX">+34 975 371 XXX</a>
                </h6>
                <h6 class="d-none d-lg-block">+34 975 371 XXX</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Tailored from '@/components/Tailored.vue'

export default {
  name: 'tailored',
  components: {
    Tailored
  }
}
</script>
