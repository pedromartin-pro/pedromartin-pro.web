<template>
  <section class="module no-gutter p-0">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-tabs justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#shop-description">
                <h6>{{ $t('description') }}</h6>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#shop-info">
                <h6>{{ $t('details') }}</h6>
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
            <div class="tab-pane fade show active" id="shop-description" v-html="description"></div>
            <div class="tab-pane fade" id="shop-info">
              <table class="table">
                <tbody>
                  <tr>
                    <th>{{ $t('title') }}</th>
                    <th>{{ $t('info') }}</th>
                  </tr>
                  <tr v-for="option in options">
                    <th>{{option.title}}</th>
                    <th>{{option.value}}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'productTabs',
  props: {
    description: String,
    options: Array
  }
}
</script>
