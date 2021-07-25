<template>
  <div>
    <div class="profileItems">
      <ul class="Items-wrapper">
          <slot name="Items-li">
            <li>
              <div class="Items-img-span">
                <img src="~assets/img/Profile/record.svg">
                <span>测试</span>
              </div>
              <i>&gt;</i>
            </li>
          </slot>
      </ul>
      <div class="down-info">
        <div class="line-info"></div>
        <span>到底了~~</span>
        <div class="help-bug"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileItems'
}
</script>

<style lang="less" scoped>
  .profileItems{
    // background: yellow;
    height: 100vw;
    width: 100vw;
    margin-top: 100/40rem;
    .Items-wrapper{
      line-height: 2rem;
      // background: yellowgreen;
      li{
        box-shadow:0px 1px 1px 1px rgb(148, 143, 143);
        background: whitesmoke;
        margin-top:1rem;
        padding:0 0.5rem;
        display: flex;
        justify-content:space-between;

        .Items-img-span{
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 50/40rem;
            margin-right: 0.6rem;
          }
          span{
            font-size: 35/40rem;
          }
        }
    
        i{
          font-weight: 650;
        }
      }
    }
    .down-info{
      width: 100vw;
      height: 3rem;
      // background: turquoise;
      margin-top: 3rem;
      text-align: center;
      .line-info{
        border-top: 1px solid rgb(158, 151, 151);

      }
      span{
        display: block;
        margin-top: 1rem;
        font-size: 30/40rem;
      }
      .help-bug{
        // background: violet;
        height: 120/40rem;
      }
    }
  }
</style>