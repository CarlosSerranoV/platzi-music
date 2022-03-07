<template>
  <div id="app">
    <section class="section">
      <nav class="navbar ">
        <div class="container">
          <input class="input is-large" type="text" placeholder="Buscar canción" v-model="searchQuery">
          <a class="button is-info is-large" v-on:click="search">Buscar</a>
          <a class="button is-danger is-large">&times;</a>
        </div>

      </nav>
      <div class="container">
        <p> {{ searchMessage }}</p>

      </div>
      <div class="container results">
        <div class="columns">
          <div class="column" v-for="t in tracks">
            {{ t.name }} - {{ t.artists[0].name }}
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import trackService from "./services/track";


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search() {
      if (this.searchQuery == ''){return}
      trackService.search(this.searchQuery).then(res => {
        this.tracks = res.tracks.items
      })
    }
  },
  computed: {
    searchMessage() {
      return 'Encontrados ' + this.tracks.length;
    }
  }
}
</script>

<style lang="scss">
@import "scss/main.scss";

.results {
  margin-top: 50px;
}
</style>
