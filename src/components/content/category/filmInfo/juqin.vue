<template>
  <div>
    <div class="film-wrapper">
      <div class="film-Itemsone">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/35087699/">
              <img src="~assets/img/Category/JQ/1.webp" alt="中国医生">
              <span>中国医生</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/34923491/">
              <img src="~assets/img/Category/JQ/3.webp" alt="山河令">
              <span>山河令</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1305487/">
              <img src="~assets/img/Category/JQ/5.webp" alt="猫鼠游戏">
              <span>猫鼠游戏</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/2129039/">
              <img src="~assets/img/Category/JQ/6.webp" alt="飞屋环游记">
              <span>飞屋环游记</span>
            </a>
          </div>
        </filmwrapper>
      </div>

      <div class="film-Itemstwo">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26752088/">
              <img src="~assets/img/Category/JQ/2.webp" alt="我不是药神">
              <span>我不是药神</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1292064/">
              <img src="~assets/img/Category/JQ/4.webp" alt="楚门的世界">
              <span>楚门的世界</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1292370/">
              <img src="~assets/img/Category/JQ/8.webp" alt="剪刀手爱德华">
              <span>剪刀手爱德华</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1929463/">
              <img src="~assets/img/Category/JQ/7.webp" alt="少年派的奇幻漂流">
              <span>少年派的奇幻漂流</span>
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
  name:'juqin',
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