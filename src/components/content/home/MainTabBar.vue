<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <img slot="item-icon" src="~assets/img/Home/downbar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/img/Home/downbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
        <img slot="item-icon" src="~assets/img/Home/downbar/category.png" alt="">
        <img slot="item-icon-active" src="~assets/img/Home/downbar/category_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
        <img slot="item-icon" src="~assets/img/Home/downbar/like.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/Home/downbar/like_active.svg" alt="">
        <div slot="item-text">收藏</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="pink">
        <img slot="item-icon" src="~assets/img/Home/downbar/profile.png" alt="">
        <img slot="item-icon-active" src="~assets/img/Home/downbar/profile_active.png" alt="">
        <div slot="item-text">个人中心</div>
      </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/downnavbar/TabBar.vue'
  import TabBarItem from 'components/common/downnavbar/TabBarItem.vue'
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  
</style>