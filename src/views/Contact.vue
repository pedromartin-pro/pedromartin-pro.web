<template>
  <div class="wrapper">
    <!-- Hero-->
    <section class="module-cover parallax text-center" data-background="assets/images/module-2.jpg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Contacto</h2>
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <router-link to="/">{{ $t('home') }}</router-link>
              </li>
              <li class="breadcrumb-item active">Contacto</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="overlay-background" style="opacity: 0.6;"></div>
    </section>
    <!-- Hero end-->

    <!-- Services-->
    <section class="module p-b-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-9 m-auto text-center">
            <p>Puedes mandarnos un email o llamarnos por teléfono</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
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
          <div class="col-md-4">
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
          <div class="col-md-4">
            <div class="icon-box text-center">
              <div class="icon-box-icon">
                <span class="ti-map-alt"></span>
              </div>
              <div class="icon-box-title">
                <h6>
                  <a href="#map">Ver en el mapa</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services end-->

    <!-- Form-->
    <!-- <section class="module divider-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-9 m-auto text-center">
            <h1>Escríbenos un mensaje.</h1>
            <p
              class="lead"
            >Estamos encantados de que nos escribas y te responderemos lo más rápido posible.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="space" data-m-y="60px"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <form id="contact-form" method="post" novalidate>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      required
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="company"
                      placeholder="Empresa"
                      required
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      required
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="phone"
                      placeholder="Teléfono"
                      required
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      placeholder="Mensaje"
                      rows="12"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <p></p>
                  <div class="text-center">
                    <input class="btn btn-circle btn-brand" type="submit" value="Enviar mensaje" />
                  </div>
                </div>
              </div>
            </form>
            <div class="ajax-response text-center" id="contact-response"></div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Form end-->

    <section id="map" class="maps-container">
      <gmap-map class="map" :center="center" :zoom="zoom">
        <gmap-marker :position="center" :clickable="true" :draggable="true" :icon="{ url: require('../../public/images/map-icon.png')}"></gmap-marker>
      </gmap-map>
    </section>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      center: { lat: 41.9521724, lng: -2.9276217 },
      zoom: 7
    }
  }
}
</script>
