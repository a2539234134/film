<template>
  <div>
    <aside class="aside-wrapper">
      <ul id="aside-items-id" class="aside-items">
        <li>分类栏目</li>
        <li class="click-white" @click="jq_Btn" id="juqin">剧情</li>
        <li @click="jq_Btn" id="xiju">喜剧</li>
        <li @click="jq_Btn" id="dongzuo">动作</li>
        <li @click="jq_Btn" id="aiqing">爱情</li>
        <li @click="jq_Btn" id="kehuan">科幻</li>
        <li @click="jq_Btn" id="donghua">动画</li>
        <li @click="jq_Btn" id="xuanyi">悬疑</li>
        <li @click="jq_Btn" id="jingsong">惊悚</li>
        <li @click="jq_Btn" id="kongbu">恐怖</li>
        <li @click="jq_Btn" id="fanzui">犯罪</li>
        <li @click="jq_Btn" id="lishi">历史</li>
        <li></li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { addClass,removeClass2 } from '@/common/tools.js'
export default {
  name:'asideInfo',
  data(){
    return{
      lis : []
    }
  },
  created(){
    // 当组件被创建出来时获取li标签节点
    // 我们必须使用一个变量来保存数据，否则会销毁
    const lis = document.getElementsByTagName("li")
    this.lis = lis
  },
  methods:{
    // 获取当前被点击的元素节点，删除其他节点的样式属性，添加当前节点的样式
    jq_Btn(event){
      let li_now = event.currentTarget
      for(let i=5;i<this.lis.length;i++){
        removeClass2(this.lis[i],"click-white")
      }
      addClass(li_now,"click-white")
      //获取节点的属性值
      let li_id = li_now.getAttribute("id")
      this.$emit('item-click',li_id)
    }
  }
}
</script>

<style lang="less" scoped>
  .aside-wrapper{
    display: flex;
    width: 20vw;
    background: whitesmoke;
    justify-content: center;
    align-items: center;

    .aside-items{
      text-align: center;
      li{
        width: 20vw;
        height: 3rem;
        line-height: 3rem;
        border-bottom: 1px solid rgb(167, 164, 164);  
        box-shadow: 0px 1px 1px 0px rgba(167, 164, 164, 0.565);
        font-size: 30/40rem;
        &:nth-child(1){
          font-weight: 650;
        }
        &:last-child{
          height: 100/40rem;
        }
      }
    }
  }

  .click-white{
    background: white;
  }
</style>