<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Userfront from '@userfront/core'

export default {
  mounted: function () {
    Userfront.init(process.env.VUE_APP_USERFRONT_ACCESS_KEY)
  }
}
</script>

<style>
@import './assets/global.css';
</style>
