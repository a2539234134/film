<template>
  <div id="app">
    <router-link to="/home"></router-link>
    <router-link to="/search"></router-link>
    <router-link to="/cart"></router-link>
    <router-link to="/category"></router-link>
    <router-link to="/profile"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  @import url('assets/css/base.css');
</style>
