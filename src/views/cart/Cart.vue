<template>
  <div>
    <top-bar @topbarclick="FromChild"></top-bar>
    <version-info></version-info>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import TopBar from 'components/content/home/TopBar.vue'
import MainTabBar from 'components/content/home/MainTabBar.vue'
import VersionInfo from 'components/content/home/VersionInfo.vue'
export default {
  name: 'Cart',
  components:{
    TopBar,
    MainTabBar,
    VersionInfo
  },
  methods:{
    FromChild(){
      this.$store.commit('topbarclickFromChild')
    }
  }
}
</script>

<style scoped>

</style>