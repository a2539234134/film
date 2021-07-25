<template>
  <div>
    <div class="film-wrapper">
      <div class="film-Itemsone">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26425063/">
              <img src="~assets/img/Category/FZ/1.webp" alt="无双">
              <span>无双</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/27622447/">
              <img src="~assets/img/Category/FZ/2.webp" alt="小偷家族">
              <span>小偷家族</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1300992/">
              <img src="~assets/img/Category/FZ/3.webp" alt="完美的世界">
              <span>完美的世界魂</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/34926405/">
              <img src="~assets/img/Category/FZ/4.webp" alt="无罪之最">
              <span>无罪之最</span>
            </a>
          </div>
        </filmwrapper>
      </div>

      <div class="film-Itemstwo">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/3804891/">
              <img src="~assets/img/Category/FZ/5.webp" alt="无人区 ">
              <span>无人区</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/32493666/">
              <img src="~assets/img/Category/FZ/6.webp" alt="追虎擒龙">
              <span>追虎擒龙</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26816076/">
              <img src="~assets/img/Category/FZ/7.webp" alt="“大”人物">
              <span>“大”人物</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26647117/">
              <img src="~assets/img/Category/FZ/8.webp" alt="暴裂无声">
              <span>暴裂无声</span>
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
  name:'fanzui',
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