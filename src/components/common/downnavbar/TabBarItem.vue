<template>
  <div class="tab-bar-item" @click="itemClick">

    <!-- 
      单纯在slot标签里面是不能写入动态class属性的，因为该标签是要被替换的
      换成div > slot这种写法，将动态的属性或其他属性均填入div里
     -->

    <!-- 图标插槽 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    
    <!-- 活跃图标插槽 -->
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    
    <!-- 字体插槽 -->
    
    <!-- <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div> -->

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor: {
      type:String,
      default: 'red'
    }
  },
  computed:{
    isActive(){
      // 获取处理活跃路由的path $route.path
      // 判断活跃的path 是否与当前路径一致
      // indexOf 若 == -1 ，则$route.path 的路径 和 this.path的路径不一致
      // indexOf 判断字符串是否一致 当前路径与活跃的路径一致的时候
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      // console.log('itemClick');
      // .catch(err=>{}) 目的是为了防止多次点击组件出现的报错
      // this.$router.replace(this.path)
      this.$router.replace(this.path).catch(err=>{})
    }
  }
}
</script>

<style scoped>
  /* 文字均等分 */
  .tab-bar-item{
    flex:1;
    text-align: center;
    /* 正常情况下，所有的导航栏的高度均为49px */
    height: 49px;
    font-size: 14px;
  }

  /* 设置图片大小 */
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /* 导入图片后会出现3px的空白像素区域 */
    vertical-align: middle;
  }
/* 
  .active{
    color: red;
  } */
</style>