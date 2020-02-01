<template>
  <div class="wrapper">
    <Jarallax
      image="/images/outdoors.jpg"
      :name="$t('contact')"
    ></Jarallax>

    <!-- Services-->
    <section class="module p-b-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-9 m-auto text-center">
            <p>{{ $t('email_or_call') }}.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
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
          <div class="col-md-4">
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
          <div class="col-md-4">
            <div class="icon-box text-center">
              <div class="icon-box-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="icon-box-title">
                <h6>
                  <a href="#map">{{ $t('show_in_the_map') }}</a>
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
        <div class="row p-b-40">
          <div class="col-lg-6 col-md-9 m-auto text-center">
            <h1>{{ $t('write_to_us_a_message') }}.</h1>
            <p>{{ $t('delighted_you_write_to_us') }}.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="space" data-m-y="60px"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <form id="contact" method="post" data-netlify="true">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      :placeholder="$t('name')"
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
                      :placeholder="$t('company')"
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
                      :placeholder="$t('email')"
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
                      :placeholder="$t('phone')"
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
                      :placeholder="$t('message')"
                      rows="12"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <p></p>
                  <div class="text-center">
                    <input
                      class="btn btn-circle btn-brand"
                      type="submit"
                      :value="$t('send_message')" />
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

    <section id="map" class="maps-container col-lg-10 offset-lg-1 col-sm-8 offset-sm-2">
      <gmap-map class="map" :center="center" :zoom="zoom">
        <gmap-marker :position="center" :clickable="true" :draggable="true" :icon="{ url: require('../../public/images/map-icon.png')}"></gmap-marker>
      </gmap-map>
    </section>
  </div>
</template>

<script>
import Jarallax from '@/components/Jarallax.vue'

export default {
  name: 'contact',
  data () {
    return {
      center: { lat: 41.9521724, lng: -2.9276217 },
      zoom: 7
    }
  },
  components: {
    Jarallax
  }
}
</script>
