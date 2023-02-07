<template>
    <div>
    <Header/>
    <router-view></router-view>
    <Footer/>  
    </div>   
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
export default {
    components:{Header,Footer},
    mounted() {
        //通知vuex发请求将数据存储于仓库
    this.$store.dispatch("categoryList");
    this.$store.dispatch('categorybanner');
    this.$store.dispatch('categoryfloor');
    
    },
}
</script>

<style>

</style>