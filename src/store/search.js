
import {reqgetsearch} from '../api'

const actions={
    async reqgetSearch({commit},params){
        let result= await reqgetsearch(params)
             if(result.code==200){
                //console.log(result.data)
                 commit('GETEGORLIST4',result.data)
             }
         }, 
}
//操作数据state
const mutations={
    GETEGORLIST4(state,value){
        //console.log(value)
        state.value=value
    },
}
//用于存储数据
const state={
    value:{}
}
//
const getters={
    attrsList(state){
      return  state.value.attrsList||[]
    },
    goodsList(state){
        return  state.value.goodsList||[]
      },
      trademarkList(state){
        return  state.value.trademarkList||[]
      },
}
export default {
    actions,
    mutations,
    state,
    getters
}