<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getpage', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="startnumandendnum.star > 1"
      @click="$emit('getpage', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="startnumandendnum.star > 2">···</button>

    <button
      v-for="(page, index) in startnumandendnum.end"
      :key="index"
      v-if="page >= startnumandendnum.star"
      @click="$emit('getpage', page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>

    <button v-if="startnumandendnum.end < totalpage - 1">···</button>
    <button
      v-if="startnumandendnum.end < totalpage"
      @click="$emit('getpage', totalpage)"
      :class="{ active: pageNo == totalpage }"
    >
      {{ totalpage }}
    </button>
    <button
      :disabled="pageNo == totalpage"
      @click="$emit('getpage', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  props: ["pageNo", "pageSize", "total", "continue"],
  name: "Pagination",
  computed: {
    //总页数
    totalpage() {
      return Math.ceil(this.total / this.pageSize);
    },
    //连续多少页以及开始和结束页
    startnumandendnum() {
      let star = 0,
        end = 0;
      if (this.continue > this.totalpage) {
        star = 1;
        end = this.totalpage;
      } else {
        star = this.pageNo - parseInt(this.continue / 2);
        end = this.pageNo + parseInt(this.continue / 2);
        if (star < 1) {
          star = 1;
          end = this.continue;
        }
        if (end > this.totalpage) {
          end = this.totalpage;
          star = end - 2 * parseInt(this.continue / 2);
        }
      }
      return { star, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>