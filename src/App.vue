<template>
  <div id="app">
    <pm-header/>
    <router-view>

    </router-view>
    <pm-footer/>
  </div>
</template>

<script>
import pmHeader from "./components/layout/header"
import pmFooter from "./components/layout/footer"

export default {
  name: 'App',
  components: {
    pmFooter,
    pmHeader,
  }
}
</script>

<style lang="scss">
@import "scss/main.scss";

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px greenyellow solid;
}
</style>
