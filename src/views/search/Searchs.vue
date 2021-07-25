<template>
<div>
  <nav-bar class="search-wrapper">
    <div slot="left" class="left-bar">
      <slot class="left">
        <img src="~assets/img/Search/left.svg" @click="getBlack">
      </slot>
    </div>
    <div slot="center" class="center-bar">
      <slot class="center">欢迎来到搜索界面</slot>
    </div>
  </nav-bar>
  <search-info></search-info>
</div>
</template>

<script>
import NavBar from 'components/common/topnavbar/NavBar.vue'
import SearchInfo from 'components/content/searchsInfo/SearchInfo.vue'
export default {
  name:'Searchs',
  components:{
    NavBar,
    SearchInfo
  },
  methods:{
    getBlack(){
      // 返回至上一个页面
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  .search-wrapper{
    background-image: linear-gradient(
      to right bottom,
      pink,
      rgb(238, 104, 209)
    );
  }

  .left-bar{ 
    display: flex;
    justify-content:center;
    align-items: center;
    img{
      width: 50/40rem;
    }
  }
  .center-bar{
    color:white;
    font-weight: 650;
    text-align: center;
  }

</style>