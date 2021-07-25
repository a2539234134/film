<template>
<div>
  <div class="in-search">
    <div class="into-search">
        <i></i>
        <input class="inp" type="text" placeholder="搜索商品" autofocus>
        <button class="btn">搜索</button>
    </div>
  </div>

  <!-- 模拟猜用户喜欢的图书内容 -->
  <div class="like-Infos">
    <span class="font-spans">猜你想搜</span>
    <ul class="books-Infos">
      <li>1
        <a href="https://movie.douban.com/subject/1292052/">
          《肖生克的救赎》弗兰克·德拉邦特励志救赎
          <span class="infos-bao">爆</span>
        </a>
      </li>
      <li>2
        <a href="https://movie.douban.com/subject/1291546/">
          《霸王别姬》陈凯歌高端巨作
          <span class="infos-bao">爆</span>
        </a>
      </li>
      <li>3
        <a href="https://movie.douban.com/subject/1292720/">
          《阿甘正传》罗伯特·泽米吉斯导绎励志一生
          <span class="infos-bao">爆</span>
        </a>
      </li>
      <li>4
        <a href="https://movie.douban.com/subject/1295644/">
          《这个杀手不太冷》吕克·贝松两人彼此相依的故事
          <span class="infos-hot">热</span>
        </a>
      </li>
      <li>5
        <a href="https://movie.douban.com/subject/1292722/">
          《泰坦尼克号》詹姆斯·卡梅隆轮船沉海爱情永存
          <span class="infos-hot">热</span>
        </a>
      </li>
      <li>6
        <a href="https://movie.douban.com/subject/1292063/">
          《美丽人生》罗伯托·贝尼尼讲述最美的谎言
          <span class="infos-new">新</span>
        </a>
      </li>
      <li>7
        <a href="https://movie.douban.com/subject/1291561/">
          《千与千寻》宫崎骏奇幻巨作
          <span class="infos-bao">爆</span>
        </a>
      </li>
      <li>8
        <a href="https://movie.douban.com/subject/1295124/">
          《辛德勒的名单》史蒂文·斯皮尔伯格救人于水火
        </a>
      </li>
      <li>9
        <a href="https://movie.douban.com/subject/3541415/">
          《盗梦空间》克里斯托弗·诺兰梦里的无限可能
        </a>
      </li>
      <li>10
        <a href="https://movie.douban.com/subject/3011091/">
          《忠犬八公的故事》拉斯·霍尔斯道姆
        </a>
      </li>
    </ul>
    <a href="https://movie.douban.com/top250">
      <span class="more-Infos">查看更多推荐电影 ></span>
    </a>
    
  </div>
</div>
</template>

<script>
export default {
  name: 'SearchInfo'
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
body {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
  background-color: white;
}
input {
  outline: none;
}
a {
  text-decoration: none;
}

.in-search {
  width: 100vw;
  height: 80/40rem;
  // background: gold;
  margin: 150/40rem 0;
  .into-search {
    width: 90vw;
    height: 80/40rem;
    // border: 1px solid whitesmoke;
    border-radius: 10/40rem;
    background: whitesmoke;
    line-height: 76/40rem;
    display: flex;
    margin: 0 auto;
    i {
      display: inline-block;
      width: 80/40rem;
      height: 80/40rem;
      background: url("~@/assets/img/Search/bigger.svg") no-repeat;
      background-size:50/40rem;
      background-position: center center;
      border-right: 1px solid rgb(158, 158, 158);
    }
    .inp {
      width: 80vw;
      border: 0;
      font-size: 40/40rem;
      background: whitesmoke;
      padding-left: 0.3rem;
    }
    .btn {
      width: 3rem;
      height: 2rem;
      background-image: linear-gradient(to left bottom, pink, #e67689);
      border: none;
      padding: 0;
      font-size: 30/40rem;
      outline: none;
      color: white;
    }
  }
}


// user-like部分
.like-Infos{
  .font-spans {
    font-size: 40/40rem;
    font-weight: 600;
    padding-left: 1rem;
  }
  .books-Infos {
    background-image: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 192, 203, 0.473));
    margin-top: 1rem;
    padding-left: 1rem;
    border-radius: 10/40rem;
    li {
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      color: #807878;
      font-weight: 650;
      margin-top: 20/40rem;
      a {
        color: black;
        font-size: 28/40rem;
        span {
          font-size: 0.6rem;
          color: white;
          font-weight: normal;
          border-radius: 3px;
        }
        .infos-bao {
          background: linear-gradient(to top right, red, #e0970f);
        }
        .infos-new {
          background: linear-gradient(to top right, #f00c0c, #d409d4);
        }
        .infos-hot {
          background: linear-gradient(to top right, red, yellow);
        }
      }
    }
  } 
}

.more-Infos{
  display: block;
  margin-top: 1rem;
  text-align: center;
  color: rgb(128, 120, 120);
  font-size: 28/40rem;
}
</style>