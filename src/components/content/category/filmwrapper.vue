<template>
  <div>
    <div class="film-template">
      <slot name="addFilmItems">
        <a href="https://movie.douban.com/subject/35087699/">
          <img src="~assets/img/Category/JQ/1.webp" alt="中国医生">
          <span>中国医生</span>
        </a>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'filmwrapper'
}
</script>

<style lang="less" scoped>
.film-template{
  text-align: center;
  padding-top: 0.5rem;
  width: 7rem;
  height: 7rem;
  border: 1px solid rgb(236, 230, 230);
  background: whitesmoke;
  margin-bottom: 1rem;
  img{
    width: 5rem;
    height: 5rem;
  }
  span{
    display: block;
    font-weight: 650;
    font-size: 0.8rem;
  }
}
</style>