<template>
  <main>
    <transition name="move">

      <pm-notification v-show="showNotification">
        <div slot="body" class="notification is-success" v-bind:class="{'is-danger': this.tracks.length == 0 }">
          <p v-show="this.tracks.length == 0">No se encontraron resultados</p>
          <p v-show="!this.tracks.length == 0">Correcto</p>
        </div>
      </pm-notification>
    </transition>

    <transition name="move">

      <pm-loader v-show="isLoading"></pm-loader>
    </transition>
    <section class="section" v-show="!isLoading">
      <nav class="navbar ">
        <div class="container">
          <input class="input is-large" type="text" placeholder="Buscar canción" v-model="searchQuery"
                 v-on:keyup.enter="search">
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
            <pm-track :track="t" v-on:select="setSelectedTrack" v-bind:class="{'is-active': t.id == selectedTrack}"
                      v-blur="t.preview_url"></pm-track>
            <!--            {{ t.name }} - {{ t.artists[0].name }}-->
          </div>
        </div>
      </div>

    </section>
  </main>
</template>

<script>
import trackService from "../services/track";
import pmTrack from "../components/track"
import pmLoader from "../components/shared/loader"
import pmNotification from "../components/shared/notification"

export default {
  name: 'App',
  components: {
    pmTrack,
    pmLoader,
    pmNotification
  },
  data() {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: "",
      showNotification: false
    }
  },
  methods: {
    search() {
      if (this.searchQuery == '') {
        return
      }
      this.isLoading = true;
      trackService.search(this.searchQuery).then(res => {
        console.log(res);
        this.showNotification = true;
        this.tracks = res.tracks.items
        this.isLoading = false;

      })
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000)
      }
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
.results {
  margin-top: 50px;
}

.is-active {
  border: 3px greenyellow solid;
}
</style>
