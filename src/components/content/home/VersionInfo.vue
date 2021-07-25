<template>
  <div class="versionInfo-wrapper" id="none-version">
    <div class="wrapper-V">
      <span>本开发以下功能：</span>
      <ol class="test-version">
        <li>点击左上角按钮显示侧边栏功能信息</li>
        <slot name="versionV"></slot>
      </ol>
    </div>
  </div>
</template>

<script>

export default {
  name:'VersionInfo',
}
</script>

<style lang="less" scoped>
  .versionInfo-wrapper{
    width: 0;
    height: 100%;
    background-color: whitesmoke;
    position: absolute;
    left: 0;
    top: 100/40rem;
    overflow: hidden;
    transition: 0.5s;
  }

  .wrapper-V{
    position: absolute;
    top: 3rem;
    left: 1rem;
    width: 15rem;
    /* 切记使用过渡效果时，宽度必须是一个确定的值，否则文字会因宽度不足而挤层一挤 */
    /* width: 100%; */
    height: 100vw;
    /* background-color: violet; */
    /* color: black; */
    font-weight: 650;
  }

  .test-version{
    margin-left: 2rem;
    margin-top: 1rem;
    font-weight: 500;
  }
  .test-version li{
    width: 11rem;
    list-style-type: decimal;
    font-size: 30/40rem;
    margin: 1rem 0;
  }
</style>