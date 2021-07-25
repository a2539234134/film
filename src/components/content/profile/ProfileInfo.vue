<template>
  <div>
    <div class="user-wrapper">
      <div class="user-image">
        <img src="~assets/img/Profile/user-head.webp">
      </div>
      <div class="user-Infos">
          <div class="username-smalli">
            <span class="span-username">user_clxdawios</span>
            <i class="small-i">&nbsp;svip&nbsp;</i>
            <i class="small-i">&nbsp;&nbsp;lv.8&nbsp;&nbsp; </i>
          </div>
        <div class="info-sex-address">
          <span class="span-sex">性别：保密</span>
          <span class="span-address">
            <img src="~assets/img/Profile/address.svg"> 美国洛圣都
          </span>
        </div>
        <div class="invitations">
          <span>邀请码：259712138</span>
          <span>邀请人: 菲肠酶粒锯兔</span>
        </div>
        <div class="gift-wrapper">
          <img src="~assets/img/Profile/gift.svg">
          <span class="gift-span">领奖中心</span>
        </div>
      </div> 
    </div>

    <div class="Infos-Items">
      <profile-items>
        <li slot="Items-li">
          <div class="Items-img-span">
            <img src="~assets/img/Profile/record.svg">
            <span>浏览记录</span>
          </div>
          <i>&gt;</i>
        </li>

        <li slot="Items-li">
          <div class="Items-img-span">
            <img src="~assets/img/Profile/look.svg">
            <span>看一看</span>
          </div>
          <i>&gt;</i>
        </li>

        <li slot="Items-li">
          <div class="Items-img-span">
            <img src="~assets/img/Profile/recommended.svg">
            <span>推荐影片</span>
          </div>
          <i>&gt;</i>
        </li>
        <li slot="Items-li">
          <div class="Items-img-span">
            <img src="~assets/img/Profile/comments.svg">
            <span>专家影评</span>
          </div>
          <i>&gt;</i>
        </li>
        <li slot="Items-li">
          <div class="Items-img-span">
            <img src="~assets/img/Profile/activity.svg">
            <span>活动中心</span>
          </div>
          <i>&gt;</i>
        </li>
        <li slot="Items-li">
          <div class="Items-img-span">
            <img src="~assets/img/Profile/more.svg">
            <span>更多功能敬请期待</span>
          </div>
          <i>&gt;</i>
        </li>
      </profile-items>
    </div>
  </div>
</template>

<script>
import ProfileItems from 'components/content/profile/ProfileItems.vue'
export default {
  name: 'ProfileInfo',
  components:{
    ProfileItems
  }
}
</script>

<style lang="less" scoped>
  .user-wrapper{
    background-color: whitesmoke;
    margin-top:150/40rem;
    width: 100vw;
    height: 300/40rem;
    display:flex;
    justify-content: space-around;
    align-items: center;

    .user-image{
      width: 100vw;
      height: 300/40rem;
      // background-color: sandybrown;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 200/40rem;
        height: 200/40rem;
        vertical-align: bottom;
        border-radius: 50%;
      }
    }

    .user-Infos{
      .username-smalli{
        // background-color: slateblue;
        height: 1.5rem;
        .span-username{
          font-weight: 650;
          font-size: 1rem;
        }
        .small-i{
          font-size: 20/40rem;
          font-weight: 650;
          background-image: linear-gradient(
            to right top,
            red,
            orange
          );
          border-radius:0.2rem;
          margin: 0 0.3rem;
        }
      }

      .info-sex-address{
        // background-color: springgreen;
        height: 1.5rem;
        .span-sex{
          font-size:30/40rem;
          margin-right: 1rem;
        }
        .span-address{ 
          font-size: 30/40rem;
          img{
            width: 50/40rem;
            
          }
        }
      }

      .invitations{
        height: 1.5rem;
        // background: yellow;
        span{
          font-size: 23/40rem;
          margin: 0 0.1rem;
        }
      }

      .gift-wrapper{
        height: 1.5rem;
        // background: violet;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 1rem;
        }
        span{
          font-size: 30/40rem;
          font-weight: 650;
          margin-left: 0.6rem;
        }
      }


    }
    
    
}
</style>