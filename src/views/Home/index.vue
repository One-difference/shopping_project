<template>
  <div>
      <TypeNav/>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <Like/>
      <Floor v-for="(floor,index) in value3" :key="floor.id" :list='floor'/>
      <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer/index.vue'
import Recommend from './Recommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
import {mapState} from 'vuex'
export default {
components:{ListContainer,Recommend,Rank,Like,Floor,Brand},

computed:{
    ...mapState({
        value3:(big)=>{
          return  big.home.value3
        }
    })
},


}
</script>

<style>

</style>