<template>
  <div>
    <top-bar @topbarclick="FromChild"></top-bar>
    <version-info>
      <li slot="versionV">
        本页面数据均为静态
      </li>
      <li slot="versionV">
        左侧的侧边栏供选择，右边按照分类展示数据
      </li>
      <li slot="versionV">
        本人曾用过原生的JS发送AJAX请求，将MongoDB数据库的数据请求至页面中
      </li>
      <li slot="versionV">
        github.com/a2539234134/data
        作品代码及效果展示
      </li>

    </version-info>
    <cate-gory-W></cate-gory-W>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import TopBar from 'components/content/home/TopBar.vue'
import MainTabBar from 'components/content/home/MainTabBar.vue'
import VersionInfo from 'components/content/home/VersionInfo.vue'
import CateGoryW from 'components/content/category/CateGoryW.vue'
export default {
  name: 'Category',
  components:{
    TopBar,
    VersionInfo,
    MainTabBar,
    CateGoryW
  },
  methods:{
    FromChild(){
      this.$store.commit('topbarclickFromChild')
    }
  }
}
</script>

<style lang="less" scoped>

</style>