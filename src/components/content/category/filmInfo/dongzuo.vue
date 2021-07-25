<template>
  <div>
    <div class="film-wrapper">
      <div class="film-Itemsone">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/25828589/">
              <img src="~assets/img/Category/DZ/1.webp" alt="黑寡妇">
              <span>黑寡妇</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1652587/">
              <img src="~assets/img/Category/DZ/2.webp" alt="阿凡达">
              <span>阿凡达</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/3878007/">
              <img src="~assets/img/Category/DZ/3.webp" alt="海王">
              <span>海王</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/30459571/">
              <img src="~assets/img/Category/DZ/4.webp" alt="明日之战">
              <span>明日之战</span>
            </a>
          </div>
        </filmwrapper>
      </div>

      <div class="film-Itemstwo">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1866479/">
              <img src="~assets/img/Category/DZ/5.webp" alt="复仇者联盟">
              <span>复仇者联盟</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1432146/">
              <img src="~assets/img/Category/DZ/6.webp" alt="钢铁侠">
              <span>钢铁侠</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1291843/">
              <img src="~assets/img/Category/DZ/7.webp" alt="黑客帝国">
              <span>黑客帝国 </span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/3025375/">
              <img src="~assets/img/Category/DZ/8.webp" alt="奇异博士">
              <span>奇异博士</span>
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
  name:'dongzuo',
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