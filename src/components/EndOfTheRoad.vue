<template>
  <section class="module bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-9 m-auto text-center">
          <h1>¿No encuentras lo que buscas?</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="space" data-m-y="60px"></div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="feature">
            <router-link to="/tailored">
              <div class="feature-thumb">
                <img src="/images/shop/1.jpg" alt />
              </div>
              <div class="feature-content">
                <h6>A medida</h6>
                <p>Gran parte de nuestro trabajo es crear productos a medida de las necesidades de nuestros clientes. Pon a prueba a nuestro equipo de ebanistas. Por muy loco que te parezca, creenos, será dificil que nos sorprenda.</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feature">
            <router-link to="/contact">
              <div class="feature-thumb">
                <img src="/images/shop/1.jpg" alt />
              </div>
              <div class="feature-content">
                <h6>O contáctanos</h6>
                <p>Si todavía no lo tienes claro, puedes mandarnos un email, llamarnos por teléfono o escribirnos un mensaje en la pagina de contacto.</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
