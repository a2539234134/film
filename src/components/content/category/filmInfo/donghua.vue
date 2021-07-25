<template>
  <div>
    <div class="film-wrapper">
      <div class="film-Itemsone">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1291560/">
              <img src="~assets/img/Category/DH/1.webp" alt="龙猫">
              <span>龙猫</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/24733428/">
              <img src="~assets/img/Category/DH/2.webp" alt="心灵奇旅">
              <span>心灵奇旅</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1291583/">
              <img src="~assets/img/Category/DH/3.webp" alt="天空之城">
              <span>天空之城</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/5045678/">
              <img src="~assets/img/Category/DH/4.webp" alt="大鱼海棠">
              <span>大鱼海棠</span>
            </a>
          </div>
        </filmwrapper>
      </div>

      <div class="film-Itemstwo">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/25907124/">
              <img src="~assets/img/Category/DH/5.webp" alt="姜子牙">
              <span>姜子牙</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/20495023/">
              <img src="~assets/img/Category/DH/6.webp" alt="寻梦环游记">
              <span>寻梦环游记</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1297359/">
              <img src="~assets/img/Category/DH/7.webp" alt="幽灵公主">
              <span>幽灵公主 </span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26694926/">
              <img src="~assets/img/Category/DH/8.webp" alt="狼行者">
              <span>狼行者</span>
            </a>
          </div>
        </filmwrapper>
      </div>
    </div>
  </div>
</template>

<script>
import filmwrapper from 'components/content/category/filmwrapper.vue'
export default {
  name:'donghua',
  components:{
    filmwrapper
  }
}
</script>

<style lang="less" scoped>
  .film-wrapper{
    display: flex;
    width: 80vw;
    // background: wheat;
    
    .film-Itemsone{
      width: 80vw;
      // background: violet;
    }

    .film-Itemstwo{
      width: 80vw;
      // background: chartreuse;
      margin-top: 2rem;
    }
  }


  
</style>