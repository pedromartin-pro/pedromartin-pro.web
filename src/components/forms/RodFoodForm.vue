<template>
  <div class="shop-single-item">
    <h2 class="shop-single-item-title">{{ $t('do_an_order') }}</h2>
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
</template>
