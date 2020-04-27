<template>
  <header class="header header-transparent">
    <div class="container-fluid">
      <!-- Brand-->
      <div class="inner-header">
        <router-link class="inner-brand" to="/"><img id="logo" src="/images/logo.svg" alt="Pedro Martin"></router-link>
      </div>
      <!-- Navigation-->
      <div class="inner-navigation collapse">
        <div class="inner-nav">
          <ul>
            <li>
              <router-link to="/varillas">
                <span class="menu-item-span">{{ $t('rods') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/persianas">
                <span class="menu-item-span">{{ $t('shutters') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/a-medida">
                <span class="menu-item-span">{{ $t('tailored') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/sobre-nostros">
                <span class="menu-item-span">{{ $t('about_us') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contacto">
                <span class="menu-item-span">{{ $t('contact') }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="extra-nav">
        <ul>
          <li><a v-on:click="changeLanguage('es')" class="top-bar-cart"><img src="@/assets/icons/es.png" class="menu-item-span" width="16"></a></li>
          <li><a v-on:click="changeLanguage('en')" class="top-bar-cart"><img src="@/assets/icons/en.png" class="menu-item-span" width="16"></a></li>
          <!-- <li><a v-on:click="changeLanguage('it')" class="top-bar-cart"><img src="@/assets/icons/it.png" class="menu-item-span" width="16"></a></li>
          <li><a v-on:click="changeLanguage('pt')" class="top-bar-cart"><img src="@/assets/icons/pt.png" class="menu-item-span" width="16"></a></li> -->
          <li class="nav-toggle">
            <a href="#" data-toggle="collapse" data-target=".inner-navigation">
              <span class="menu-item-span">
                <i class="fas fa-bars"></i>
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
    changeLanguage: function (language) {
      this.$i18n.fallbackLocale = language === 'en' ? 'es' : 'en'
      this.$i18n.locale = language
    }
  }
}
</script>
