<template>
  <section class="module-cover parallax text-center" data-background="images/module-2.jpg">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        <h2>{{name}}</h2>
        <ol class="breadcrumb justify-content-center">
          <li class="breadcrumb-item">
            <router-link to="/">Inicio</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: parentLink }">{{parent}}</router-link>
          </li>
          <li class="breadcrumb-item active">{{name}}</li>
        </ol>
        </div>
      </div>
    </div>
    <div class="overlay-background" style="opacity: 0.6;"></div>
  </section>
</template>

<script>
export default {
  name: 'productHeader',
  props: {
    name: String,
    parent: String,
    parentLink: String,
  }
}
</script>

