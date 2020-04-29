<template>
  <section class="module bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-9 m-auto text-center">
          <h1>{{ $t('find_looking_for') }}</h1>
        </div>
      </div>

      <br>

      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="timeline-card">
            <router-link to="/a-medida">
              <div class="timeline-card-preview">
                <img src="/images/cepilladora.jpg" alt>
              </div>
              <div class="timeline-card-body">
                <h4>{{ $t('tailored') }}</h4>
                <p>{{ $t('tailored_explained') }}.</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-5">
          <div class="timeline-card">
            <router-link to="/contacto">
              <div class="timeline-card-preview">
                <img src="/images/arte.jpg" alt>
              </div>
              <div class="timeline-card-body">
                <h4>{{ $t('contact_us') }}</h4>
                <p>{{ $t('contact_us_explained') }}.</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
