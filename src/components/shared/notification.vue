<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="column is-5 is-offset-4">
            <slot name="body">Algo anduvo mal</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notification{
  margin: 10px;
}
</style>
