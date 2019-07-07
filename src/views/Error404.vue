<template>
  <div class="wrapper">
    <section class="module-cover parallax text-center" data-background="images/module-2.jpg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>{{ $t('not_found') }}</h2>
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                Error 404
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="overlay-background" style="opacity: 0.6;"></div>
    </section>

    <section class="module">
      <div class="container">
        <p>
          <router-link to="/" class="btn btn-block btn-dark">Ir a la pagina de inicio</router-link>
        </p>
      </div>
    </section>
  </div>
</template>
