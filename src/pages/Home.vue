<template>
  <div class="container">
    <common-header :showBackBtn="showBackBtn"></common-header>
    <div class="cont">
      <ul class="cont-ul">
        <list v-for="item in items" :key="item.title" :id="item.id" :num="item.num" :title="item.title" :img="item.img"></list>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../components/CommonHeader'
import CommonFooter from '../components/CommonFooter'
import List from '../components/List'
export default {
  name: 'home',
  components: {
    CommonHeader,
    CommonFooter,
    List
  },
  data() {
    return {
      items: [],
      showBackBtn: false
    }
  },
  created() {
    this.items = [
      {'id': '1', 'title': '白夜行', 'num': '100%', 'img': 'http://img3m2.ddimg.cn/62/32/25119332-1_b_9.jpg'},
      {'id': '2', 'title': '嫌疑人x的献身', 'num': '100%', 'img': 'http://img3m6.ddimg.cn/25/12/23490646-1_b_0.jpg'},
      {'id': '3', 'title': '恶意', 'num': '99%', 'img': 'http://img3m4.ddimg.cn/49/29/24041704-1_b_6.jpg'},
      {'id': '4', 'title': '秘密', 'num': '90%', 'img': 'http://img3m3.ddimg.cn/41/30/25172573-1_b_2.jpg'},
      {'id': '5', 'title': '变身', 'num': '60%', 'img': 'http://img3m8.ddimg.cn/95/25/24012248-1_b_11.jpg'},
    ];
  }
}
</script>

<style lang="less">
.container {
  position: relative;
  width: 100%;
  height: 100%;
  .cont {
    position: absolute;
    left: 0;
    top: 60px;
    .cont-ul {
      overflow: hidden;
      margin-bottom: 60px;
    }
  }
}
</style>
