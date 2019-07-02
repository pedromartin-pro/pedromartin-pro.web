<template>
  <div class="wrapper">
    <!-- Hero-->
    <section class="module-cover parallax text-center" data-background="images/module-2.jpg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Varilla para alimentación</h2>
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <router-link to="/">Inicio</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/rods">{{ $t('rods') }}</router-link>
              </li>
              <li class="breadcrumb-item active">Varilla de pirotécnia redonda</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="overlay-background" style="opacity: 0.6;"></div>
    </section>
    <!-- Hero end-->

    <!-- Portfolio Single-->
    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p>
              <img src="/images/shop/1.jpg" alt />
            </p>
            <p>
              <img src="/images/shop/1.jpg" alt />
            </p>
            <p>
              <img src="/images/shop/1.jpg" alt />
            </p>
            <p>
              <img src="/images/shop/1.jpg" alt />
            </p>
          </div>
          <div class="col-md-4">
            <div class="sticky-sidebar">
              <h6 class="single-portfolio-title">Varilla para alimentación</h6>
              <p>
                Just then her head struck against the roof of the hall in fact she was now more than nine
                feet high and she at once took up the little golden key and hurried off to the garden
                door.
              </p>
              <hr class="m-t-30 m-b-30" />
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Tipo</label>
                  <select class="form-control">
                    <option selected="selected">Redondo</option>
                    <option>Cuadrado</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Largo</label>
                  <div class="input-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Largo en centímetros"
                      value="30"
                    />
                    <div class="input-group-prepend">
                      <div class="input-group-text">cm</div>
                    </div>
                  </div>
                  <small class="form-text text-muted">En centímetros.</small>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Ancho</label>
                  <div class="input-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Largo en centímetros"
                      value="10"
                    />
                    <div class="input-group-prepend">
                      <div class="input-group-text">mm</div>
                    </div>
                  </div>
                  <small class="form-text text-muted">En milímetros.</small>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Grosor</label>
                  <div class="input-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Largo en centímetros"
                      value="10"
                    />
                    <div class="input-group-prepend">
                      <div class="input-group-text">mm</div>
                    </div>
                  </div>
                  <small class="form-text text-muted">En milímetros.</small>
                </div>
              </form>
              <hr class="m-t-30 m-b-30" />
              <div>
                <p>
                  <a class="btn btn-circle btn-brand" href="#">Pedir presupuesto</a>
                </p>
                <p>
                  <a class="btn btn-circle btn-outline-secondary" href="#">Pedir muestra</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Portfolio Single end-->

    <EndOfTheRoad></EndOfTheRoad>
  </div>
</template>

<script>
import EndOfTheRoad from '@/components/EndOfTheRoad.vue'

export default {
  name: 'product',
  components: {
    EndOfTheRoad
  }
}
</script>
