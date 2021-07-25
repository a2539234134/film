<template>
  <div>
    <div class="cateGory-wrapper">
      <aside-info @item-click="toggleClick"></aside-info>
      <!-- <film-items v-show="isShow"></film-items> -->
      <juqin v-show="juqin"></juqin>
      <xiju v-show="xiju"></xiju>
      <dongzuo v-show="dongzuo"></dongzuo>
      <aiqing v-show="aiqing"></aiqing>
      <kehuan v-show="kehuan"></kehuan>
      <donghua v-show="donghua"></donghua>
      <xuanyi v-show="xuanyi"></xuanyi>
      <jingsong v-show="jingsong"></jingsong>
      <kongbu v-show="kongbu"></kongbu>
      <fanzui v-show="fanzui"></fanzui>
      <lishi v-show="lishi"></lishi>
    </div>
  </div>
</template>

<script>
import asideInfo from 'components/content/category/asideInfo.vue'
import juqin from 'components/content/category/filmInfo/juqin.vue'
import xiju from 'components/content/category/filmInfo/xiju.vue'
import dongzuo from 'components/content/category/filmInfo/dongzuo.vue'
import aiqing from 'components/content/category/filmInfo/aiqing.vue'
import kehuan from 'components/content/category/filmInfo/kehuan.vue'
import donghua from 'components/content/category/filmInfo/donghua.vue'
import xuanyi from 'components/content/category/filmInfo/xuanyi.vue'
import jingsong from 'components/content/category/filmInfo/jingsong.vue'
import kongbu from 'components/content/category/filmInfo/kongbu.vue'
import fanzui from 'components/content/category/filmInfo/fanzui.vue'
import lishi from 'components/content/category/filmInfo/lishi.vue'
export default {
  name:'CateGoryW',
  data(){
    return{
      juqin : true,
      xiju : false,
      dongzuo : false,
      aiqing : false,
      kehuan : false,
      donghua : false,
      xuanyi : false,
      jingsong : false,
      kongbu : false,
      fanzui : false,
      lishi : false,

    }
  },
  components:{
    asideInfo,
    juqin,
    xiju,
    dongzuo,
    aiqing,
    kehuan,
    donghua,
    xuanyi,
    jingsong,
    kongbu,
    fanzui,
    lishi
  },

  methods:{
    toggleClick(li_id){
      if(li_id==="juqin"){
        this.xiju = this.dongzuo = this.aiqing = this.kehuan = this.donghua = this.xuanyi = this.jingsong = this.kongbu = this.fanzui = this.lishi = false
        this.juqin = true
      }else if(li_id=="xiju"){
        this.juqin = this.dongzuo = this.aiqing = this.kehuan = this.donghua = this.xuanyi = this.jingsong = this.kongbu = this.fanzui = this.lishi = false
        this.xiju = true
      }
      else if(li_id=="dongzuo"){
        this.juqin = this.xiju = this.aiqing = this.kehuan = this.donghua = this.xuanyi = this.jingsong = this.kongbu = this.fanzui = this.lishi = false
        this.dongzuo = true
      }
      else if(li_id=="aiqing"){
        this.juqin = this.dongzuo = this.xiju = this.kehuan = this.donghua = this.xuanyi = this.jingsong = this.kongbu = this.fanzui = this.lishi = false
        this.aiqing = true
      }
      else if(li_id=="kehuan"){
        this.juqin = this.dongzuo = this.aiqing = this.xiju = this.donghua = this.xuanyi = this.jingsong = this.kongbu = this.fanzui = this.lishi = false
        this.kehuan = true
      }
      else if(li_id=="donghua"){
        this.juqin = this.dongzuo = this.aiqing = this.kehuan = this.xiju = this.xuanyi = this.jingsong = this.kongbu = this.fanzui = this.lishi = false
        this.donghua = true
      }
      else if(li_id=="xuanyi"){
        this.juqin = this.dongzuo = this.aiqing = this.kehuan = this.donghua = this.xiju = this.jingsong = this.kongbu = this.fanzui = this.lishi = false
        this.xuanyi = true
      }
      else if(li_id=="jingsong"){
        this.juqin = this.dongzuo = this.aiqing = this.kehuan = this.donghua = this.xuanyi = this.xiju = this.kongbu = this.fanzui = this.lishi = false
        this.jingsong = true
      }
      else if(li_id=="kongbu"){
        this.juqin = this.dongzuo = this.aiqing = this.kehuan = this.donghua = this.xuanyi = this.jingsong = this.xiju = this.fanzui = this.lishi = false
        this.kongbu = true
      }
      else if(li_id=="fanzui"){
        this.juqin = this.dongzuo = this.aiqing = this.kehuan = this.donghua = this.xuanyi = this.jingsong = this.kongbu = this.xiju = this.lishi = false
        this.fanzui = true
      }
      else if(li_id=="lishi"){
        this.juqin = this.dongzuo = this.aiqing = this.kehuan = this.donghua = this.xuanyi = this.jingsong = this.kongbu = this.fanzui = this.xiju = false
        this.lishi = true
      }
      
    }
  }
}
</script>

<style lang="less" scoped>
  .cateGory-wrapper{
    margin-top: 100/40rem;
    display: flex;
    width: 100vw;
    height: 100%;
  }
</style>