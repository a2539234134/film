<template>
  <div>
    <div class="film-wrapper">
      <div class="film-Itemsone">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/32493124/">
              <img src="~assets/img/Category/JS/1.webp" alt="無間道">
              <span>無間道</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1293544/">
              <img src="~assets/img/Category/JS/2.webp" alt="沉默的羔羊">
              <span>沉默的羔羊</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/35477218/">
              <img src="~assets/img/Category/JS/3.webp" alt="怪奇宅">
              <span>怪奇宅</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/2334904/">
              <img src="~assets/img/Category/JS/4.webp" alt="禁闭岛">
              <span>禁闭岛</span>
            </a>
          </div>
        </filmwrapper>
      </div>

      <div class="film-Itemstwo">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1292223/">
              <img src="~assets/img/Category/JS/5.webp" alt="七宗罪 ">
              <span>七宗罪</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1780330/">
              <img src="~assets/img/Category/JS/6.webp" alt="致命魔术">
              <span>致命魔术</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/3011051/">
              <img src="~assets/img/Category/JS/7.webp" alt="恐怖游轮">
              <span>恐怖游轮</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/35009298/">
              <img src="~assets/img/Category/JS/8.webp" alt="猪">
              <span>猪</span>
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
  name:'jingsong',
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