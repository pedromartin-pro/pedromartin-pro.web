<template>
  <header class="header header-transparent">
    <div class="container-fluid">
      <!-- Brand-->
      <div class="inner-header">
        <router-link class="inner-brand" to="/">Pedro Martín</router-link>
      </div>
      <!-- Navigation-->
      <div class="inner-navigation collapse">
        <div class="inner-nav">
          <ul>
            <li>
              <router-link to="/rods">
                <span class="menu-item-span">{{ $t('rods') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/shutters">
                <span class="menu-item-span">{{ $t('shutters') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/tailored">
                <span class="menu-item-span">A {{ $t('tailored') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                <span class="menu-item-span">{{ $t('about_us') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact">
                <span class="menu-item-span">{{ $t('contact') }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="extra-nav">
        <ul>
          <li><a v-on:click="changeLanguage"><span class="menu-item-span">{{ $t('change_language') }}</span></a></li>
          <li class="nav-toggle">
            <a href="#" data-toggle="collapse" data-target=".inner-navigation">
              <span class="menu-item-span">
                <i class="ti-menu"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainMenu',
  methods: {
    changeLanguage: function (event) {
      console.log(this.$i18n)
      this.$i18n.fallbackLocale = this.$i18n.locale
      this.$i18n.locale = this.$i18n.locale === 'es' ? 'en' : 'es'
    }
  }
}
</script>
