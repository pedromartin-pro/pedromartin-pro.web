<template>
  <footer class="footer">
    <div class="footer-widgets">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <aside class="widget widget-text">
              <div class="widget-title">
                <h6>{{ $t('doubs') }}</h6>
              </div>
              <div class="textwidget">
                <p>
                  <a href="mailto:hola@pedromartin.pro">
                    <span class="ti-email"> hola@pedromartin.pro</span>
                  </a>
                  <br>

                  <span class="d-block d-lg-none">
                    <a href="tel:+34975371XXX"><span class="ti-headphone-alt"> +34 975 371 XXX</span></a>
                  </span>
                  <span class="d-none d-lg-block"><span class="ti-headphone-alt"> +34 975 371 XXX</span></span>
                </p>
                <!-- <p>
                  O puedes escribirnos un mensaje en la <router-link to="/contact">página de contacto</router-link>.
                </p> -->
              </div>
            </aside>
          </div>
          <div class="col-md-6">
            <aside class="widget widget-text">
              <div class="widget-title">
                <h6>{{ $t('address') }}</h6>
              </div>
              <div class="textwidget">
                <p>
                  Poligono Industrial Santa Ana
                  <br>Av. Félix Herrero
                  <br>Duruelo de la Sierra, Soria
                  <br>{{ $t('spain') }}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="">
              <p>Pedro Martin, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        <!-- To top button--><a class="scroll-top" href="#top">up</a>
  </footer>
</template>
