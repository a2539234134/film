<template>
  <div>
    <div class="film-wrapper">
      <div class="film-Itemsone">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/3319755/">
              <img src="~assets/img/Category/AQ/1.webp" alt="怦然心动">
              <span>怦然心动</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/30331149/">
              <img src="~assets/img/Category/AQ/2.webp" alt="白蛇：缘起">
              <span>白蛇：缘起</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1418200/">
              <img src="~assets/img/Category/AQ/3.webp" alt="傲慢与偏见">
              <span>傲慢与偏见</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1294408/">
              <img src="~assets/img/Category/AQ/4.webp" alt="音乐之声">
              <span>音乐之声</span>
            </a>
          </div>
        </filmwrapper>
      </div>

      <div class="film-Itemstwo">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26799731/">
              <img src="~assets/img/Category/AQ/5.webp" alt="以你的名字呼唤我">
              <span>以你的名字呼唤我</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1296339/">
              <img src="~assets/img/Category/AQ/6.webp" alt="爱在黎明破晓前">
              <span>爱在黎明破晓前</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1482072/">
              <img src="~assets/img/Category/AQ/7.webp" alt="穿普拉达的女王">
              <span>穿普拉达的女王 </span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1292274/">
              <img src="~assets/img/Category/AQ/8.webp" alt="幸福终点站">
              <span>幸福终点站</span>
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
  name:'aiqing',
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