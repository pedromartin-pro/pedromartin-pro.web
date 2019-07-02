<template>
  <div class="wrapper">
    <!-- Hero-->
    <section class="module-cover parallax text-center" data-background="images/module-2.jpg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Varillas</h2>
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <router-link to="/">Inicio</router-link>
              </li>
              <li class="breadcrumb-item active">Varillas</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="overlay-background" style="opacity: 0.6;"></div>
    </section>
    <!-- Hero end-->

    <!-- Shop Grid-->
    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/rods/food">
                  <img src="images/shop/1.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <a class="btn btn-new-white" href="#">Ver producto</a>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/rods/food">
                  <h6 class="shop-item-title">Palillo de alimentación</h6>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="shop-grid-item">
              <div class="shop-item-thumb">
                <router-link to="/rods/pyrotechnics">
                  <img src="images/shop/1.jpg" alt>
                </router-link>
                <div class="shop-item-hidden">
                  <a class="btn btn-new-white" href="#">Ver producto</a>
                </div>
              </div>
              <div class="shop-item-captions">
                <router-link to="/rods/pyrotechnics">
                  <h6 class="shop-item-title">Varilla de pirotécnia</h6>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Shop Grid end-->

    <!-- Features-->
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
                  <img src="images/shop/1.jpg" alt>
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
                  <img src="images/shop/1.jpg" alt>
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
  </div>
</template>
