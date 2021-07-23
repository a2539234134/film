<template>
<div>
    <div class="in-search clearfix">
    <div class="into-search">
        <i></i>
        <input class="inp" type="text" placeholder="搜索商品">
        <button class="btn">搜索</button>
    </div>
  </div>

  <!-- 模拟猜用户喜欢的图书内容 -->
  <div class="like-Infos">
    <span class="font-spans">猜你想搜</span>
    <ul class="books-Infos">
      <li>1
        <a href="javascript:;">
          《活着》余华著，大热门书籍
          <span class="infos-bao">爆</span>
        </a>
      </li>
      <li>2
        <a href="javascript:;">
          《少年读史记》张嘉骅著，新晋书籍
          <span class="infos-new">新</span>
        </a>
      </li>
      <li>3
        <a href="javascript:;">
          《百年孤独》加西亚·马尔克斯著
          <span class="infos-hot">热</span>
        </a>
      </li>
      <li>4
        <a href="javascript:;">
          《千与千寻》宫崎骏著
          <span class="infos-hot">热</span>
        </a>
      </li>
      <li>5
        <a href="javascript:;">
          《红星照耀中国》埃德加·斯诺著
        </a>
      </li>
      <li>6
        <a href="javascript:;">
          《三体》刘慈欣著，展望未来世界三体
        </a>
      </li>
      <li>7
        <a href="javascript:;">
          《杀死一只知更鸟》哈珀·李著
        </a>
      </li>
      <li>8
        <a href="javascript:;">
          《虫洞书简》王溢嘉著
        </a>
      </li>
      <li>9
        <a href="javascript:;">
          《围城》钱钟书著
        </a>
      </li>
      <li>10
        <a href="javascript:;">
          《朝花夕拾》鲁迅著
        </a>
      </li>
      <span class="more-Infos">查看更多推荐书籍 ></span>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'SearchInfo'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
body {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
  font-size: 5.33333333vw;
  background-color: white;
}
.clearfix::before,
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
input {
  outline: none;
}
a {
  text-decoration: none;
}
.in-search {
  width: 100%;
  height: 5rem;
  float: left;
  position: relative;
  line-height: 5rem;
}
.in-search .into-search {
  width: 90%;
  height: 2rem;
  border: 1px solid whitesmoke;
  border-radius: 3px;
  background: whitesmoke;
  line-height: 2rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1rem;
  margin: auto 0;
}
.in-search .into-search i {
  position: absolute;
  width: 30px;
  height: 100%;
  background: url("~@/assets/img/Search/icons.png") no-repeat;
  background-position: 0px -342px;
  margin: 0 8px;
  margin-right: 0;
  border-right: 1px solid rgb(158, 158, 158);
}
.in-search .into-search .inp {
  width: 10rem;
  border: 0;
  outline: none;
  font-size: 14px;
  margin-left: 40px ;
  background: whitesmoke;
  padding-left: 0.2rem;
}
.in-search .into-search .btn {
  width: 3rem;
  height: 2rem;
  background-image: linear-gradient(to left bottom, pink, #e67689);
  border: none;
  padding: 0;
  font-size: 14px;
  position: absolute;
  outline: none;
  color: white;
  right: -1px;
  /* bottom: 1px; */
}
.like-Infos .font-spans {
  font-size: 0.9rem;
  font-weight: 600;
  padding-left: 1rem;
}
.like-Infos .books-Infos {
  background-image: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 192, 203, 0.473));
  margin-top: 1rem;
  padding-left: 1rem;
  border-radius: 3px;
}
.like-Infos .books-Infos .more-Infos {
  font-size: 0.8rem;
  padding-left: 4rem;
  color: red;
  cursor: pointer;
}
.like-Infos .books-Infos li {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  color: #807878;
  font-weight: 650;
  margin-top: 20px;
}
.like-Infos .books-Infos li a {
  color: black;
  font-size: 0.9rem;
}
.like-Infos .books-Infos li a span {
  font-size: 0.6rem;
  color: white;
  font-weight: normal;
  border-radius: 3px;
}
.like-Infos .books-Infos li a .infos-bao {
  background: linear-gradient(to top right, red, #e0970f);
}
.like-Infos .books-Infos li a .infos-new {
  background: linear-gradient(to top right, #f00c0c, #d409d4);
}
.like-Infos .books-Infos li a .infos-hot {
  background: linear-gradient(to top right, red, yellow);
}
</style>