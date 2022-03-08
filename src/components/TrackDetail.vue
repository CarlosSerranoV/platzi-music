<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 has-text-centered">
        <figure class="media-left">
          <p class="image" v-if="track && track.album">
            <img :src="track.album.images[0].url">

          </p>
          <p>
            <a href="#" class="button is-primary is-large">
              <span class="icon" v-on:click="selectTrack"></span>
            </a>
          </p>
        </figure>
      </div>
      <div class="column is-8">
        <div class="panel">
          <div class="panel-heading">
            <h1 class="title">{{ track.name }}</h1>
          </div>
          <div class="panel-block">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <ul v-for="(v, k) in track">
                    <li>
                      <strong>{{ k }}:&nbsp;</strong>
                      <span>{{ v }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <nav class="level">
                <div class="level-left">
                  <a href="" class="level-item">

                  </a>
                </div>
              </nav>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pmTrack from "./track";
import trackService from "../services/track";
import trackMixin from "../mixins/track";

export default {
  mixins:[
    trackMixin
  ],
  data() {
    return {
      track: {}
    }
  },
  components: {
    pmTrack,

  },
  created() {
    const id = this.$route.params.id

    trackService.getBYId(id).then(res => {
      this.track = res;
    })
  }
}
</script>

<style scoped>
.columns {
  margin: 20px;
}
</style>
