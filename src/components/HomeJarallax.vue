<template>
  <section
    class="module-cover parallax fullscreen text-center"
    style='background-image: url("/images/pineforest.jpg");'
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="m-b-20">{{ $t('wood_experts') }}</h1>
          <p class="m-b-40">
            {{ $t('wood50_1') }}.
            <br />
            {{ $t('wood50_2') }}
          </p>
          <p>
            <a
              class="btn btn-lg btn-circle btn-outline-new-white"
              href="#main-products"
            >{{ $t('our_products') }}</a>
          </p>
        </div>
      </div>
    </div>
    <div class="overlay-background" style='opacity: 0.5;'></div>
  </section>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'homejarallax',
  mounted: function () {
    const el = $(this.$el)

    if (el.attr('data-overlay') > 0) {
      $('.overlay-background').css('opacity', el.attr('data-overlay'))
    }

    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(
      navigator.userAgent || navigator.vendor || window.opera
    )
    if (!isMobile) {
      const isIE =
        /MSIE 9/i.test(navigator.userAgent) ||
        /rv:11.0/i.test(navigator.userAgent) ||
        /MSIE 10/i.test(navigator.userAgent) ||
        /Edge\/\d+/.test(navigator.userAgent)

      let speed = 0.4
      if (isIE) {
        speed = 1
      }

      el.jarallax({
        speed: speed
      })
    }
  }
}
</script>
