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
                <a
                  class="btn btn-lg btn-circle btn-outline-new-white"
                  href="#main-products"
                >Nuestros productos</a>
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
                    <h4>Varilla o palillo</h4>
                    <p>Fabricamos varilla del tamaño que necesites, ya sea redonda o cuadrada. Las más demandadas son la varilla de alimentación (o de feria) y el palillo de pirotecnia, pero pídenos los que necesites.</p>
                    <p class="blue-link">Ver opciones de varillas</p>
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
                    <h4>Persiana</h4>
                    <p>Fabricamos diferentes piezas de persiana. Las más demandadas son las lamas y los montantes (para persina de plástico o de madera) con diferentes acabados y molduras.</p>
                    <p class="blue-link">Ver opciones de persina</p>
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
              <h1>Nuestro trabajo</h1>
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
                  <h6>Ebanistas expertos</h6>
                  <p>Somos un equipo de ebanistas con muchos años de experiencia creando todo tipo de productos de madera, especialmente de pino.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature">
                <div class="feature-thumb">
                  <img src="/images/shop/1.jpg" alt>
                </div>
                <div class="feature-content">
                  <h6>Madera de pino de Soria</h6>
                  <p>Tenemos la suerte de estar en la comarca de pinares entre Burgos y Soria, por lo que trabajamos con serrerias locales que nos proveen de un pino de altísma calidad.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature">
                <div class="feature-thumb">
                  <img src="/images/shop/1.jpg" alt>
                </div>
                <div class="feature-content">
                  <h6>Calidad y precio</h6>
                  <p>Debido a nuestra experiencia y la calidad de nuestra madera local, podemos ofrecer una calidad muy alta a un precio muy competitivo.</p>
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
