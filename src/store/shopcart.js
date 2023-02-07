import {reqcartList,delshop,changeshop} from '../api'

const actions={
    async reqcartList({commit}){
        let result= await reqcartList()
        //console.log(result)
             if(result.code==200){
                //console.log(result.data)
                 commit('GETEGORLIST6',result.data)
             }
         }, 
         async delshop({commit},skuId){
            let result= await delshop(skuId)
            //console.log(result)
            if(result.code==200){
                return '成功'
            }else{
                return Promise.reject(new Error('faile'))
            }
             }, 
             async changeshop({commit},{skuID,isChecked}){
                let result= await changeshop(skuID,isChecked)
                //console.log(result)
                if(result.code==200){
                    return '成功'
                }else{
                    return Promise.reject(new Error('faile'))
                }
                 }, 
                 delall({dispatch,getters}){
                     
                     let promiseall=[]
                    getters.carlist.cartInfoList.forEach(element => {
                      let promise = element.isChecked==1?dispatch('delshop',element.skuId):''
                        promiseall.push(promise)                                                                                                     
                    });
                    return Promise.all(promiseall)
                 },
                 updatachangeall({dispatch,getters},checked){
                    let promiseall=[]
                    getters.carlist.cartInfoList.forEach(element => {
                    let promise=  dispatch('changeshop',{skuID:element.skuId,isChecked:checked})
                    promiseall.push(promise)                                                                                            
                    });
                    return Promise.all(promiseall)
                 }
}
//操作数据state
const mutations={
    GETEGORLIST6(state,value){
        //console.log(value)
        state.value=value
    },
}
//用于存储数据
const state={
    value:[]
}
//
const getters={
   carlist(){
       return state.value[0]||{}
   }
}
export default {
    actions,
    mutations,
    state,
    getters
}