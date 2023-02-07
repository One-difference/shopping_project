import {getcode,usersgo,userslogin,finishlogin,logout} from '../api'
import {settoken,gettoken,cleartoken} from '../utils/token'
const actions={
    async getcode({commit},phone){
    let result= await getcode(phone)
    alert(result.data)   
     },
     async usersgo({commit},data){
        let result= await usersgo(data)
        if(result.code==200){
            return '成功'
        }else{
            return Promise.reject(new Error('注册失败'))
        }   
         },
         async userslogin({commit},data){
            let result= await userslogin(data)
            if(result.code==200){
            commit('token',result.data.token)
            settoken(result.data.token)
            return '成功'
             }else{
                return Promise.reject(new Error('登录失败'))
            }  
            },
            async finishlogin({commit}){
                let result= await finishlogin()
                   if(result.code==200){
                    commit('usersinfo',result.data)
                    return '成功'
                }else{
                   return Promise.reject(new Error('请求失败'))
               }  
                 },
                 async logout({commit}){
                    let result= await logout()
                    if(result.code==200){
                        commit('clearusers')
                        return '成功'
                    }else{
                       return Promise.reject(new Error('登陆过期'))
                   }  
                    }
                     }
 //操作数据state
 const mutations={
     token(state,token){
        state.token=token
     },
     usersinfo(state,value){
        state.value=value
     },
     clearusers(state){
         state.value={},
         state.token=''
         cleartoken()
     }
 }
 //用于存储数据
 const state={
    token:gettoken(),
    value:{}
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