<template>
  <div class="type-nav">
    <div class="container">
      <!--事件委派-->
      <div @mouseleave="leave" @mouseenter="enter">
        <h2 class="all">全部商品分类</h2>
        <transition name="sorts">
          <!--事件委派实现路由跳转-->
          <div class="sort" @click="gosearch" v-show='show'>
            <div class="all-sort-list2">
              <div
                class="item"
                v-for="(c1, index) of value"
                :key="c1.categoryId"
              >
                <!--js去操控样式-->
                <h3 @mouseenter="blue(index)" :class="{ cur: or == index }">
                  <!--绑定自定义属性区别委派之后谁是a标签，谁是1,2,3级标题-->
                  <a
                    :data-categoryname="c1.categoryName"
                    :data-category1id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!--js去操控样式-->
                <div
                  class="item-list clearfix"
                  :style="{ display: or == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="(c2, index) of c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryname="c2.categoryName"
                          :data-category2id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) of c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            :data-categoryname="c3.categoryName"
                            :data-category3id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { throttle } from "lodash";
//console.log(_)
export default {
  name: "TypeNav",
  data() {
    return {
      or: -1,
      show: true,
    };
  },
  mounted() {
    if (this.$route.name == "search") {
      this.show = false;
    }
    if (this.$route.name == "detail") {
      this.show = false;
    }
  },
  computed: {
    //big为大仓库
    ...mapState({
      value: (big) => {
        return big.home.value;
      },
    }),
  },
  methods: {
    blue: throttle(function (index) {
      this.or = index;
    }, 50),
    enter() {
      if (this.$route.name == "search") {
        this.show = true;
      }
       if (this.$route.name == "detail") {
        this.show = true;
      }
    },
    leave() {
      this.or = -1;
      if (this.$route.name == "search") {
        this.show = false;
      }
       if (this.$route.name == "detail") {
        this.show = false;
      }
    },
    gosearch(event) {
      let element = event.target;
      //console.log(element)
      //获取浏览器返回的event里的节点的属性和值并解构出来
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
        if(categoryname){
            let loc={name:'search'}
           let query={categoryName:categoryname}
            if(category1id){query.category1Id=category1id}
            else if(category2id){query.category2Id=category2id}
            else{query.category3Id=category3id}
            //全局事件给Header传参
           this.$bus.$emit('chuan',query)
               //整合params和query
      if(this.$route.params){
          
          loc.params=this.$route.params
          loc.query=query
           this.$router.push(loc)
           //
      }
        }
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          .cur {
            background-color: skyblue;
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }

    .sorts-enter{height: 0px;}
    .sorts-enter-to{height: 461px;}
    .sorts-enter-active{transition: all 0.05s linear;}

  }
}
</style>
