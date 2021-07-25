<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="center">
      <slot name="center"></slot>
    </div>
    
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>  
</template>

<script>
export default {
  name:'NavBar',
}
</script>

<style lang="less" scoped>
  .nav-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100/40rem;
    line-height: 100/40rem;
    box-shadow:0 1px 2px 1px rgba(255, 255, 255, 0.465);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
    .left,.right{
      width: 60/40rem;
      margin: 0 40/40rem;
    }
    .center{
      flex:1;
    }
  }

  

  
</style>