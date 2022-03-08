<template>
  <section class="hero is-success">
    <div class="hero-head ">
      <header class="nav">
        <div class="container ">
          <div class="navbar-start">
            <div class="navbar-item">
              <strong> Platzi Music</strong>
            </div>
          </div>
          <div class="navbar-end navbar-menu">
            <router-link class="nav-item" to="/">Buscar</router-link>
            <router-link class="nav-item" to="about">Nosotros</router-link>

          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Platz Music</h1>
        <h2 class="subtitle">Canciones que estan Vue.nisimas</h2>
        <pm-player></pm-player>
      </div>
    </div>
  </section>
</template>

<script>
import pmPlayer from "../player"

export default {
components:{
  pmPlayer
}
}

</script>
