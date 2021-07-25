<template>
  <div>
    <div class="film-wrapper">
      <div class="film-Itemsone">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/25662329/">
              <img src="~assets/img/Category/XJ/1.webp" alt="疯狂动物城">
              <span>疯狂动物城</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/27060077/">
              <img src="~assets/img/Category/XJ/2.webp" alt="绿皮书">
              <span>绿皮书</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/3287562/">
              <img src="~assets/img/Category/XJ/3.webp" alt="神偷奶爸">
              <span>神偷奶爸</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/30318116/">
              <img src="~assets/img/Category/XJ/4.webp" alt="利刃出鞘">
              <span>利刃出鞘</span>
            </a>
          </div>
        </filmwrapper>
      </div>

      <div class="film-Itemstwo">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/25887288/">
              <img src="~assets/img/Category/XJ/5.webp" alt="冰雪奇缘2">
              <span>我不是药神</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1293839/">
              <img src="~assets/img/Category/XJ/6.webp" alt="罗马假日">
              <span>罗马假日</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/11026735/">
              <img src="~assets/img/Category/XJ/7.webp" alt="超能陆战队">
              <span>超能陆战队</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1907966/">
              <img src="~assets/img/Category/XJ/8.webp" alt="疯狂原始人">
              <span>疯狂原始人</span>
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
  name:'xiju',
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