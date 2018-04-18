<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #2f4050;
    height: 100%;
  }
  rect {
    fill: none;
    pointer-events: all
  }

  circle {
    fill: none;
    stroke-width: 2.5px
  }
</style>
