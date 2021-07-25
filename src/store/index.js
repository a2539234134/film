import Vue from 'vue'
import Vuex from 'vuex'
import { addClass,removeClass2 } from 'common/tools.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    flag:false
  },
  mutations:{
    // 子组件发生点击处理
    topbarclickFromChild(state){
      const version = document.getElementById('none-version')
      const lis = document.querySelectorAll(".line")
      state.flag = !state.flag
      if(state.flag){
        version.style.width = "75%"
        addClass(lis[0],"transform_rotateZz")
        addClass(lis[1],"opacity")
        addClass(lis[2],"transform_rotateZf")
      }else{
        version.style.width = "0%"
        removeClass2(lis[0],"transform_rotateZz")
        removeClass2(lis[1],"opacity")
        removeClass2(lis[2],"transform_rotateZf")
      }
    }
  },
  actions:{

  },
  getters:{

  },
  modules:{

  }
})

export default store