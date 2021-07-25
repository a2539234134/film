<template>
  <div>
    <div class="film-wrapper">
      <div class="film-Itemsone">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26754233/">
              <img src="~assets/img/Category/LS/1.webp" alt="八佰">
              <span>八佰</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/35125443/">
              <img src="~assets/img/Category/LS/2.webp" alt="1921">
              <span>1921</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1293172/">
              <img src="~assets/img/Category/LS/3.webp" alt="末代皇帝">
              <span>末代皇帝</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/35288767/">
              <img src="~assets/img/Category/LS/4.webp" alt="革命者">
              <span>革命者</span>
            </a>
          </div>
        </filmwrapper>
      </div>

      <div class="film-Itemstwo">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26325320/">
              <img src="~assets/img/Category/LS/5.webp" alt="血战钢锯岭 ">
              <span>血战钢锯岭</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/3649049/">
              <img src="~assets/img/Category/LS/6.webp" alt="金陵十三钗">
              <span>金陵十三钗</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26816076/">
              <img src="~assets/img/Category/LS/7.webp" alt="卢旺达饭店">
              <span>卢旺达饭店</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/11598977/">
              <img src="~assets/img/Category/LS/8.webp" alt="叶问3">
              <span>叶问3</span>
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
  name:'flishi',
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