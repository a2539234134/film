<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style scoped>
    /* 使用flex 布局 */
  #tab-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f6f6f6;
    width: 100vw;
    /* 将导航栏定位在下面 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* 设置阴影 */
    box-shadow: 0 -1px 1px rgba(0, 0, 0, .1); 
  }

</style>