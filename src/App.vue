<template>
  <div id="app">
    <pm-header/>
    <pm-loader v-show="isLoading"></pm-loader>
    <section class="section" v-show="!isLoading">
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
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="t in tracks">
            <pm-track :track="t" v-on:select="setSelectedTrack" v-bind:class="{'is-active': t.id == selectedTrack}"></pm-track>
<!--            {{ t.name }} - {{ t.artists[0].name }}-->
          </div>
        </div>
      </div>

    </section>
    <pm-footer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import trackService from "./services/track";
import pmFooter from "./components/layout/footer"
import pmHeader from  "./components/layout/header"
import pmTrack from "./components/track"
import pmLoader from "./components/shared/loader"

export default {
  name: 'App',
  components: {
    pmFooter,
    pmHeader,
    pmTrack,
    pmLoader,
    HelloWorld
  },
  data() {
    return {
      searchQuery: '',
      tracks: [],
      isLoading:false,
      selectedTrack:""
    }
  },
  methods: {
    search() {
      if (this.searchQuery == '') {
        return
      }
      this.isLoading=true;
      trackService.search(this.searchQuery).then(res => {
        console.log(res);
        this.tracks = res.tracks.items
        this.isLoading=false;

      })
    },
    setSelectedTrack(id){
      this.selectedTrack = id;
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

.is-active{
  border: 3px greenyellow solid;
}
</style>
