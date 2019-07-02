<template>
  <div class="wrapper">
    <section class="module-cover parallax text-center" data-background="images/module-2.jpg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Quienes somos</h2>
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <router-link to="/">Inicio</router-link>
              </li>
              <li class="breadcrumb-item active">Quienes somos</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="overlay-background" style="opacity: 0.6;"></div>
    </section>

    <!-- About-->
    <section class="module bg-gray p-t-0">
      <div class="container">
        <div class="row">
          <div class="col-md-10 m-auto">
            <div class="space" data-m-y="-60px"></div>
            <div class="modal-video-container">
              <img src="images/main/player.jpg" alt>
              <a class="play-button" href="https://www.youtube.com/watch?v=0aCbYxJ9gus"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About end-->

    <!-- Products-->
    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <a href="#">
              <div class="timeline-card">
                <div class="timeline-card-preview">
                  <img src="images/shop/1.jpg" alt>
                </div>
                <div class="timeline-card-body">
                  <h4>Nosotros</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p class="blue-link">Read more</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href="#">
              <div class="timeline-card">
                <div class="timeline-card-preview">
                  <img src="images/shop/1.jpg" alt>
                </div>
                <div class="timeline-card-body">
                  <h4>Nuestra historia</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p class="blue-link">Read more</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href="#">
              <div class="timeline-card">
                <div class="timeline-card-preview">
                  <img src="images/shop/1.jpg" alt>
                </div>
                <div class="timeline-card-body">
                  <h4>Comarca de pinares</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p class="blue-link">Read more</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
