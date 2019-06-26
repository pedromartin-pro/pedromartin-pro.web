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
              <router-link to="/rod">
                <span class="menu-item-span">Varilla</span>
              </router-link>
            </li>
            <li>
              <router-link to="/shutters">
                <span class="menu-item-span">Persiana</span>
              </router-link>
            </li>
            <li>
              <router-link to="/tailored">
                <span class="menu-item-span">A medida</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                <span class="menu-item-span">Quienes somos</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact">
                <span class="menu-item-span">Contacto</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="extra-nav">
        <ul>
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
