//对于axios进行二次封装
import axios from 'axios';
import nprogress from 'nprogress'
import store from '../store'
//进度条样式
import 'nprogress/nprogress.css'
//创建axios实例
const requests = axios.create({
    //发请求时路径自带api
    //baseURL:'/api',
    timeout:5000,
})
//请求拦截器，请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    nprogress.start();
    if(store.state.detail.uuid){
        config.headers.userTempId = store.state.detail.uuid
    }
    if(store.state.users.token){
        config.headers.token = store.state.users.token
    }     
    //config配置对象，有一个header请求头属性很重要
    return config

})
//响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done();
    //成功回调，服务器数据回来后，可以做一些事情
    return res.data;
    
},(err)=>{
    //响应失败回调函数
    return Promise.reject(new Error('faile'))
})

export default requests;