<template>
  <div>
    <top-bar></top-bar>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import TopBar from 'components/content/home/TopBar.vue'
import MainTabBar from 'components/content/home/MainTabBar.vue'
export default {
  name: 'Cart',
  components:{
    TopBar,
    MainTabBar
  }
}
</script>

<style scoped>

</style>