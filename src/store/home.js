import {reqCategory,reqgetbanner,reqgetfloor} from '../api'
const actions={
   async categoryList({commit}){
   let result= await reqCategory()
  
        if(result.code==200){
            commit('GETEGORLIST',result.data)
        }
    },
    async categorybanner({commit}){
        let result= await reqgetbanner()
             if(result.code==200){
                 commit('GETEGORLIST2',result.data)
             }
         },
         async categoryfloor({commit}){
            let result= await reqgetfloor()
                 if(result.code==200){
                     commit('GETEGORLIST3',result.data)
                 }
             }
}
//操作数据state
const mutations={
    //收到result.data
    GETEGORLIST(state,value){
        value.splice(0,value.length - 15)
        state.value=value
    },
    GETEGORLIST2(state,value){
        state.value2=value
    },
    GETEGORLIST3(state,value){
        state.value3=value
    }
}
//用于存储数据
const state={
    value:[],
    value2:[],
    value3:[]
}
//
const getters={

}
export default {
    actions,
    mutations,
    state,
    getters
}