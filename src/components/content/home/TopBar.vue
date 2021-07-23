<template>
  <div>
    <nav-bar class="home-nav">
      <!-- 制作分类图标 -->
      <div slot="left" @click="btn_left">
        <ul class="topbar-left">
          <li class="line"></li>
          <li class="line"></li>
          <li class="line"></li>
        </ul>
      <!-- 标题 -->
      </div>
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
import { toggleClass } from 'common/tools.js'
import NavBar from 'components/common/topnavbar/NavBar.vue'

export default {
  name:'TopBar',
  components:{
    NavBar,
  },
  methods:{
    btn_left(){
      this.count++
      const lis = document.querySelectorAll(".line")
      toggleClass(lis[0],"transform_rotateZz")
      toggleClass(lis[1],"opacity")
      toggleClass(lis[2],"transform_rotateZf")
    },
    searchBtn(){
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped>
  /* 标题 */
  .home-nav{
    text-align: center;
    font-weight: 650;
    background-color: var(--color-tint);
    color: white;
  }
  /* 制作分类图标 */
  .topbar-left{
    width: 18px;
    height: 44px;
    position: relative;
    margin-left: 1rem;
  }

  .topbar-left li{
    width: 1rem;
    height: 2px;
    background-color: white;
    position: absolute;
    transition: 0.5s;
  }

  .topbar-left li:nth-child(1){
    top:1rem;
    transform-origin: left center;
  }
  .topbar-left li:nth-child(2){
    top:1.4rem;
  }
  .topbar-left li:nth-child(3){
    top:1.8rem;
    transform-origin: left center;
  }

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
    width: 3rem;
    height: 2rem;
    position: absolute;
    bottom: 0;
    top: 0;
    margin: auto 0;
  }

  .topbar-right img{
    display: block;
    width: 25px;
    height: 25px;
    color: black;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto 0;
    color: white;
  }
</style>