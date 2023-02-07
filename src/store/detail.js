import {reqgoodsinfo,reqshopinfo} from '../api'
import {getuuid} from '../utils/uuid'
const actions={
    async reqgoodsinfo({commit},skuId){
    let result= await reqgoodsinfo(skuId)
   
         if(result.code==200){
             commit('GETEGORLIST5',result.data)
         }
     },
     async reqshopinfo({commit},{skuId,skuNum}){
        let result= await reqshopinfo(skuId,skuNum)
        if(result.code==200){
            return '成功'
        }else{
            return Promise.reject(new Error('faile'))
        }
         },
 }
 //操作数据state
 const mutations={
     //收到result.data
     GETEGORLIST5(state,value){
         //console.log(value)
         state.value=value
     },
 }
 //用于存储数据
 const state={
     value:{},
     uuid:getuuid()
 }
 //
 const getters={
    categoryView(state){
        return state.value.categoryView||{}
    },
    skuInfo(state){
        return state.value.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.value.spuSaleAttrList||[]
    }
 }
 export default {
     actions,
     mutations,
     state,
     getters
 }