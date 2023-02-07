import VueRouter from 'vue-router'
import routers from '../router/routers'
import store from '../store'
let router= new VueRouter({
   routes : routers,
   scrollBehavior (to, from, savedPosition) {
      return { y: 0 }
    }
})

router.beforeEach(async (to,from,next)=>{
   
   let token=store.state.users.token
   let name=store.state.users.value.name
   //登陆了
   if(token){
      //登陆且还去登陆
      if(to.path=='/login'){
         next('/home')
      }else{
         //登陆情况正常
         if(name){
           next()
        }else{
           //解决其他页面刷新丢失登陆信息
           try {
              await store.dispatch('finishlogin')
              next()
           } catch (error) {
              //登陆过期
            await store.dispatch('logout')
              next('/login')
           }
         }
      }
      }else{
         let topath=to.path
         if(topath.indexOf('/trade')!=-1 || topath.indexOf('/pay')!=-1 || topath.indexOf('/center')!=-1){
            next('/login?req='+topath)
         }else{
            next()
         }
      
      }

})


export default router