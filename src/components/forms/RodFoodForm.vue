<template>
  <div class="shop-single-item">
    <h2 class="shop-single-item-title">{{ $t('do_an_order') }}</h2>
    <br>
    <form>
      <div class="form-group">
        <label for="exampleFormControlSelect1">{{ $t('type') }}</label>
        <select class="form-control">
          <option selected="selected">{{ $t('round') }}</option>
          <option>{{ $t('square') }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">{{ $t('long') }}</label>
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            placeholder="30"
            value="30"
          />
          <div class="input-group-prepend">
            <div class="input-group-text">cm</div>
          </div>
        </div>
        <small class="form-text text-muted">{{ $t('in_cm') }}.</small>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">{{ $t('width') }}</label>
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
        <small class="form-text text-muted">{{ $t('in_mm') }}.</small>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">{{ $t('height') }}</label>
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
        <small class="form-text text-muted">{{ $t('in_mm') }}.</small>
      </div>
    </form>
    <hr class="m-t-30 m-b-30" />
    <div>
      <p>
        <a class="btn btn-block btn-dark" href="#">{{ $t('ask_for_a_budget') }}</a>
      </p>
      <p>
        <a class="btn btn-block btn-outline-secondary" href="#">{{ $t('ask_for_a_sample') }}</a>
      </p>
    </div>
  </div>
</template>
