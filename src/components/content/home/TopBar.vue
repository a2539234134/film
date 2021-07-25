<template>
  <div>
    <nav-bar class="home-nav">
      <!-- 制作分类图标 -->
      <div slot="left" @click="btn_left" class="topbar-left-wrapper">
        <ul class="topbar-left">
          <li class="line"></li>
          <li class="line"></li>
          <li class="line"></li>
        </ul>
      </div>
      <!-- 标题 -->
      <div slot="center">电影天堂</div>
      <!-- 制作搜索框 -->
      <div slot="right">
        <div class="topbar-right">
          <img src="~assets/img/Home/topbar/search.svg" @click="searchBtn">
        </div>
      </div>
    </nav-bar>

  </div>
</template>

<script>

import NavBar from 'components/common/topnavbar/NavBar.vue'
export default {
  name:'TopBar',
  props:{
    path:String
  },
  components:{
    NavBar,
  },
  methods:{
    btn_left(){
      this.$emit("topbarclick")
    },
    searchBtn(){
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="less" scoped>
  /* 标题 */

  .home-nav{
    text-align: center;
    font-weight: 650;
    background-color: var(--color-tint);
    color: white;
  }

  /* 制作版本图标 */
  .topbar-left-wrapper{
    height: 100/40rem;
    width:50/40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: 1rem;
      height: 4/40rem;
      background-color: white;
      margin-top: 12/40rem;
      transition: 0.5s;
      &:nth-child(1){
        top:1rem;
        transform-origin: left center;
      }
      &:nth-child(2){
        top:1.4rem;
      }
      &:nth-child(3){
        top:1.8rem;
        transform-origin: left center;
      }
    }
  }

  // 变形
  .transform_rotateZz{
    transform: rotateZ(52deg);
  }
  .opacity{
    opacity: 0;
  }
  .transform_rotateZf{
    transform: rotateZ(-52deg);
  }

  /* 搜索图标 */
  .topbar-right{
    height: 100/40rem;
    img{
      display: block;
      width: 90/40rem;
      height: 100/40rem;
      color: black;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto 0;
      color: white;
      padding-right: 40/40rem;
    }
  }

</style>