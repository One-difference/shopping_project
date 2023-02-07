import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import { MessageBox } from 'element-ui'
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
//三级联动
import TypeNav from './components/TypeNav'
//轮播
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import './mock/serve'
import 'swiper/css/swiper.css'
import * as API from './api'
//注册全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.config.productionTip = false
Vue.use(VueRouter)

//console.log(router)
let orignpush=router.push
let orignreplace=router.replace
//重写跳转方法，多次点击不会出现报错
router.push=function(location,relove,reject){
   if(relove&&reject){
      router.push=function(location,relove,reject){
   orignpush.call(this,location,relove,reject)
   }
}
else{orignpush.call(this,location,()=>{},()=>{})}
}
router.replace=function(location,relove,reject){
   if(relove&&reject){
    router.replace=function(location,relove,reject){
   orignreplace.call(this,location,relove,reject)
   }
}
else{orignreplace.call(this,location,()=>{},()=>{})}
}
new Vue({
    el:"#app",
    render: h=> h(App),
    router,
    store,
    beforeCreate(){
        Vue.prototype.$bus=this
         Vue.prototype.$API=API
       
      },
        
})