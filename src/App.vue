<template>
  <div id="app">
    <section class="section">
      <nav class="navbar ">
        <div class="container">
          <input class="input is-large" type="text" placeholder="Buscar canción" v-model="searchQuery">
          <a class="button is-info is-large" v-on:click="search">Buscar</a>
          <a class="button is-danger is-large">&times;</a>
          <p> samll{{searchMessage}}</p>
        </div>

      </nav>
      <div class="container results">
        <div class="columns" v-for="t in tracks">
          {{t.name}} {{t.artist}}
        </div>
      </div>
    </section>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

const tracks = [
  {name: 'muchahca', artist: 'Luis Alberto'},
  {name: 'Hoy aca en el baile', artist: 'El Pepo'},
  {name: 'I was made for loving you', artist: 'Kiss'},

]

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
      this.tracks = tracks
    }
  },
  computed: {
    searchMessage(){
      return 'Encontrados ' + this.tracks.length;
    }
  }
}
</script>

<style lang="scss">
@import "scss/main.scss";

.results{
  margin-top: 50px;
}
</style>
