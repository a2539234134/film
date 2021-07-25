<template>
  <div>
    <top-bar @topbarclick="FromChild"></top-bar>
    <version-info>
      <li slot="versionV">
        本页面数据均为静态页面
      </li>
    </version-info>
    <profile-info></profile-info>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import TopBar from 'components/content/home/TopBar.vue'
import MainTabBar from 'components/content/home/MainTabBar.vue'
import VersionInfo from 'components/content/home/VersionInfo.vue'
import ProfileInfo from 'components/content/profile/ProfileInfo.vue'
export default {
  name: 'Profile',
  components:{
    TopBar,
    VersionInfo,
    MainTabBar, 
    ProfileInfo
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