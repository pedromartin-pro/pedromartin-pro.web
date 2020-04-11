<template>
  <section
    class="module-cover parallax text-center"
    :style="getBackground()"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>{{ name }}</h2>
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item">
              <router-link to="/">{{ $t('home') }}</router-link>
            </li>
            <li class="breadcrumb-item active">{{ name }}</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="overlay-background" style='opacity: 0.5;'></div>
  </section>
</template>

<script>
export default {
  name: 'jarallax',
  props: {
    name: String,
    image: String
  },
  methods: {
    getBackground: function () {
      return `background-image: url("${this.image}");`
    }
  },
  mounted: function () {
    const el = $(this.$el)

    if (el.attr('data-overlay') > 0) {
      el.append('<div class="overlay-background"></div>')
      el.find('.overlay-background').css('opacity', el.attr('data-overlay'))
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
