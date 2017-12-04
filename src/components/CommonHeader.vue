<template>
  <div class="header">
     <h3 class="title" @click="addCount">东野圭吾小屋</h3>
     <a href="javascript:;" class="go-back" @click="goBack" v-show="showBackBtn">返回</a>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'common-header',
  props: ['showBackBtn'],
  methods: {
    ...mapMutations(['add']),
    addCount() {
      // this.$store.commit('add');
      this.add();
    },
    goBack() {
      window.history.back();
    }
  }
}
</script>

<style lang="less">
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #EEE;
  z-index: 100;
  .title {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .go-back {
    position: absolute;
    left: 20px;
    top: 18px;
    text-decoration: none;
    color: #333;
  }
}
</style>
