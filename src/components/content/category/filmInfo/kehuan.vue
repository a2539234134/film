<template>
  <div>
    <div class="film-wrapper">
      <div class="film-Itemsone">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26266893/">
              <img src="~assets/img/Category/KH/1.webp" alt="流浪地球">
              <span>流浪地球</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/30206311/">
              <img src="~assets/img/Category/KH/2.webp" alt="寂静之地2">
              <span>寂静之地2</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/4920389/">
              <img src="~assets/img/Category/KH/3.webp" alt="头号玩家">
              <span>头号玩家</span>
            </a>
          </div>
        </filmwrapper>

        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/1889243/">
              <img src="~assets/img/Category/KH/4.webp" alt="星际穿越">
              <span>星际穿越</span>
            </a>
          </div>
        </filmwrapper>
      </div>

      <div class="film-Itemstwo">
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/2131459/">
              <img src="~assets/img/Category/KH/5.webp" alt="机器人总动员">
              <span>机器人总动员</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/25986662/">
              <img src="~assets/img/Category/KH/6.webp" alt="疯狂的外星人">
              <span>疯狂的外星人</span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/26613692/">
              <img src="~assets/img/Category/KH/7.webp" alt="哥斯拉大战金刚">
              <span>哥斯拉大战金刚 </span>
            </a>
          </div>
        </filmwrapper>
        <filmwrapper>
          <div slot="addFilmItems">
            <a href="https://movie.douban.com/subject/7065154/">
              <img src="~assets/img/Category/KH/8.webp" alt="银河护卫队">
              <span>银河护卫队</span>
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
  name:'kehuan',
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