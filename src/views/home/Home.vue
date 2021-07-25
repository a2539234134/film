<template>
  <div>
    <top-bar @topbarclick="FromChild"></top-bar>
    <version-info>
      <!-- 添加本页面功能介绍 -->
      <li slot="versionV">测试</li>
      <li slot="versionV">测试</li>
      <li slot="versionV">测试</li>
      <li slot="versionV">测试</li>
      <li slot="versionV">测试</li>
      <li slot="versionV">测试</li>
      <li slot="versionV">测试</li>
      <li slot="versionV">测试</li>
      <li slot="versionV">测试</li>
      <li slot="versionV">测试</li>
      
    </version-info>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import TopBar from 'components/content/home/TopBar.vue'
import MainTabBar from 'components/content/home/MainTabBar.vue'
import VersionInfo from 'components/content/home/VersionInfo.vue'
export default {
  name:'Home',
  components:{
    TopBar,
    VersionInfo,
    MainTabBar
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