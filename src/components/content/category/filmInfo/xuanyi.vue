<template>
  <div>
    <div class="film-wrapper">
      <div class="film-Itemsone">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/32493124/">
              <img src="~assets/img/Category/XY/1.webp" alt="悬崖之上">
              <span>悬崖之上</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/35073682/">
              <img src="~assets/img/Category/XY/2.webp" alt="刑偵日記">
              <span>刑偵日記</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/30176393/">
              <img src="~assets/img/Category/XY/3.webp" alt="误杀">
              <span>误杀</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26580232/">
              <img src="~assets/img/Category/XY/4.webp" alt="看不见的客人">
              <span>看不见的客人</span>
            </a>
          </div>
        </filmwrapper>
      </div>

      <div class="film-Itemstwo">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/30334073/">
              <img src="~assets/img/Category/XY/5.webp" alt="调音师">
              <span>调音师</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/32581207/">
              <img src="~assets/img/Category/XY/6.webp" alt="御赐小仵作">
              <span>御赐小仵作</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1292343/">
              <img src="~assets/img/Category/XY/7.webp" alt="蝴蝶效应">
              <span>蝴蝶效应 </span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/5350027/">
              <img src="~assets/img/Category/XY/8.webp" alt="妖猫传">
              <span>妖猫传</span>
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
  name:'xuanyi',
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