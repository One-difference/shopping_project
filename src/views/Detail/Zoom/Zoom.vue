<template>
  <div class="spec-preview">
    <img :src="imgUrl.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big" >
      <img :src="imgUrl.imgUrl" ref='big'/>
    </div>
    <!-- 绿罩 -->
    <div class="mask" ref='mask'></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:['skuImageList'],
    data() {
      return {
        index:0
      }
    },
    computed:{
      imgUrl(){
        return this.skuImageList[this.index]||{}
      }
    },
    mounted(){
      this.$bus.$on('zhi',(imgindex)=>{
        this.index=imgindex
      })  
    },
    methods:{
      handler(event){
        let big =this.$refs.big
       let mask=this.$refs.mask
       let left=event.offsetX-mask.offsetWidth/2
       let top=event.offsetY-mask.offsetHeight/2
       if(left<0){left=0}
       if(left>mask.offsetWidth){left=mask.offsetWidth}
       if(top<0){top=0}
       if(top>mask.offsetWidth){top=mask.offsetWidth}
       mask.style.left=left+'px'
       mask.style.top=top+'px'
        big.style.left=-2*left+'px'
       big.style.top=-2*top+'px'

      }
    }
  }
</script>

<style lang="less" scoped>
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>