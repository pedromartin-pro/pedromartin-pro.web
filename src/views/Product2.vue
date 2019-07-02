<template>
  <div class="wrapper">
    <!-- Page Header-->
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
    <!-- Page Header end-->

    <!-- Product-->
    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="shop-single-item-photos">
              <a class="shop-single-item-popup" href="/images/shop/1.jpg">
                <img src="/images/shop/1.jpg" alt />
              </a>
              <ul class="shop-single-item-gallery">
                <li>
                  <a class="shop-single-item-popup" href="/images/shop/1.jpg">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                </li>
                <li>
                  <a class="shop-single-item-popup" href="/images/shop/1.jpg">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                </li>
                <li>
                  <a class="shop-single-item-popup" href="/images/shop/1.jpg">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="shop-single-item">
              <h2 class="shop-single-item-title">Haz un pedido</h2>
              <br>
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
                  <a class="btn btn-block btn-dark" href="#">Pedir presupuesto</a>
                </p>
                <p>
                  <a class="btn btn-block btn-outline-secondary" href="#">Pedir muestra</a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product end-->

    <!-- Tabs-->
    <section class="module no-gutter p-0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-tabs justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#shop-description">
                  <h6>Description</h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#shop-info">
                  <h6>Additional information</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="shop-tab-content tab-content">
              <div class="tab-pane fade show active" id="shop-description">
                <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean shorts fixie consequat flexitarian four loko.</p>
                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Seitan High Life reprehenderit consectetur cupidatat kogi about me. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi.</p>
              </div>
              <div class="tab-pane fade" id="shop-info">
                <table class="table">
                  <tbody>
                    <tr>
                      <th>Title</th>
                      <th>Info</th>
                    </tr>
                    <tr>
                      <td>Compositions</td>
                      <td>Jeans</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>44, 46, 48</td>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <td>Black</td>
                    </tr>
                    <tr>
                      <td>Brand</td>
                      <td>Somebrand</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Tabs end-->

    <!-- Related Products-->
    <section class="module divider-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-9 m-auto text-center">
            <h5>You may also like:</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="space" data-m-y="40px"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="owl-carousel shop-carousel">
              <div class="shop-grid-item">
                <div class="shop-item-thumb">
                  <a href="#">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                  <div class="shop-item-hidden">
                    <a class="btn btn-new-white" href="#">Add to cart</a>
                  </div>
                </div>
                <div class="shop-item-captions">
                  <h6 class="shop-item-title">Classic Chair</h6>
                  <span class="shop-item-price">$20.00</span>
                </div>
              </div>
              <div class="shop-grid-item">
                <div class="shop-item-thumb">
                  <a href="#">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                  <div class="shop-item-hidden">
                    <a class="btn btn-new-white" href="#">Add to cart</a>
                  </div>
                </div>
                <div class="shop-item-captions">
                  <h6 class="shop-item-title">Thermo Flask</h6>
                  <span class="shop-item-price">$30.00</span>
                </div>
              </div>
              <div class="shop-grid-item">
                <div class="shop-item-thumb">
                  <a href="#">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                  <div class="shop-item-hidden">
                    <a class="btn btn-new-white" href="#">Add to cart</a>
                  </div>
                </div>
                <div class="shop-item-captions">
                  <h6 class="shop-item-title">Folder Calendar</h6>
                  <span class="shop-item-price">$50.00</span>
                </div>
              </div>
              <div class="shop-grid-item">
                <div class="shop-item-thumb">
                  <a href="#">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                  <div class="shop-item-hidden">
                    <a class="btn btn-new-white" href="#">Add to cart</a>
                  </div>
                </div>
                <div class="shop-item-captions">
                  <h6 class="shop-item-title">Amber Body Lotion</h6>
                  <span class="shop-item-price">$80.00</span>
                </div>
              </div>
              <div class="shop-grid-item">
                <div class="shop-item-thumb">
                  <a href="#">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                  <div class="shop-item-hidden">
                    <a class="btn btn-new-white" href="#">Add to cart</a>
                  </div>
                </div>
                <div class="shop-item-captions">
                  <h6 class="shop-item-title">Solo Headphones</h6>
                  <span class="shop-item-price">$100.00</span>
                </div>
              </div>
              <div class="shop-grid-item">
                <div class="shop-item-thumb">
                  <a href="#">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                  <div class="shop-item-hidden">
                    <a class="btn btn-new-white" href="#">Add to cart</a>
                  </div>
                </div>
                <div class="shop-item-captions">
                  <h6 class="shop-item-title">Ceramic Watch</h6>
                  <span class="shop-item-price">$20.00</span>
                </div>
              </div>
              <div class="shop-grid-item">
                <div class="shop-item-thumb">
                  <a href="#">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                  <div class="shop-item-hidden">
                    <a class="btn btn-new-white" href="#">Add to cart</a>
                  </div>
                </div>
                <div class="shop-item-captions">
                  <h6 class="shop-item-title">Wooden Bathroom Set</h6>
                  <span class="shop-item-price">$40.00</span>
                </div>
              </div>
              <div class="shop-grid-item">
                <div class="shop-item-thumb">
                  <a href="#">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                  <div class="shop-item-hidden">
                    <a class="btn btn-new-white" href="#">Add to cart</a>
                  </div>
                </div>
                <div class="shop-item-captions">
                  <h6 class="shop-item-title">Plain Glass Bottle</h6>
                  <span class="shop-item-price">$40.00</span>
                </div>
              </div>
              <div class="shop-grid-item">
                <div class="shop-item-thumb">
                  <a href="#">
                    <img src="/images/shop/1.jpg" alt />
                  </a>
                  <div class="shop-item-hidden">
                    <a class="btn btn-new-white" href="#">Add to cart</a>
                  </div>
                </div>
                <div class="shop-item-captions">
                  <h6 class="shop-item-title">Plain Glass Bottle</h6>
                  <span class="shop-item-price">$40.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Related Products end-->

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
