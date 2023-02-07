<template>
  <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(carouselList, index) in list"
                    :key="carouselList.id"
                  >
                    <img :src="carouselList.imgUrl" />
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
</template>

<script>
import Swiper from "swiper";
export default {
    name:'carousel',
    props:['list'],
watch: {
    list: {
      immediate:true,
      handler(newvalue, oldvalue) {
          //数据改变，循环结束，返回新的dom时执行
        this.$nextTick(() => {
          var mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
}
</script>

<style>

</style>