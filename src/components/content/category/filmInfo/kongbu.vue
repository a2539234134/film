<template>
  <div>
    <div class="film-wrapper">
      <div class="film-Itemsone">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1895120/">
              <img src="~assets/img/Category/KB/1.webp" alt="死寂">
              <span>死寂</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26653833/">
              <img src="~assets/img/Category/KB/2.webp" alt="生吃">
              <span>生吃</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/3804629/">
              <img src="~assets/img/Category/KB/3.webp" alt="招魂">
              <span>招魂</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1292225/">
              <img src="~assets/img/Category/KB/4.webp" alt="闪灵">
              <span>闪灵</span>
            </a>
          </div>
        </filmwrapper>
      </div>

      <div class="film-Itemstwo">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/3011308/">
              <img src="~assets/img/Category/KB/5.webp" alt="孤儿怨 ">
              <span>孤儿怨</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1306809/">
              <img src="~assets/img/Category/KB/6.webp" alt="生化危机">
              <span>生化危机</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/30444938/">
              <img src="~assets/img/Category/KB/7.webp" alt="恐惧街2">
              <span>恐惧街2</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/27077479/">
              <img src="~assets/img/Category/KB/8.webp" alt="招魂3">
              <span>招魂3</span>
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
  name:'kongbu',
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