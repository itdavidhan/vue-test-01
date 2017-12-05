<template>
  <div class="container">
    <common-header :showBackBtn="showBackBtn"></common-header>
    <div class="cont">
      <div id="books-detail">
         <div class="de-top">
           <div class="de-img">
             <img :src="currentData.img" alt="">
           </div>
           <div class="de-fen">
             <ul class="de-list">
               <li>书名: {{currentData.title}}</li>
               <li>豆瓣评分: {{currentData.douban}}</li>
               <li>推荐指数: {{currentData.num}}</li>
             </ul>
           </div>
         </div>
         <div class="de-bot">
           <p class="de-intro">[简介] {{currentData.intro}}</p>
         </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../components/CommonHeader'
import CommonFooter from '../components/CommonFooter'
export default {
  name: 'detail',
  components: {
    CommonHeader,
    CommonFooter
  },
  data() {
    return {
      showBackBtn: true,
      bookInfo: [],
      currentId: 0,
      currentData: {}
    }
  },
  created() {
    this.bookInfo = [
      {
        'id': '1', 
        'title': '白夜行', 
        'num': '100%', 
        'img': 'http://img3m2.ddimg.cn/62/32/25119332-1_b_9.jpg',
        'intro': '111111111111111111111111111111111111',
        'douban': 9.7
      },
      {
        'id': '2', 
        'title': '嫌疑人x的献身', 
        'num': '100%', 
        'img': 'http://img3m6.ddimg.cn/25/12/23490646-1_b_0.jpg',
        'intro': '2222222222222222222222222222222222222',
        'douban': 9.9
      },
      {
        'id': '3', 
        'title': '恶意', 
        'num': '99%', 
        'img': 'http://img3m4.ddimg.cn/49/29/24041704-1_b_6.jpg',
        'intro': '333333333333333333333333333333333333',
        'douban': 9.5
      },
      {
        'id': '4', 
        'title': '秘密', 
        'num': '90%', 
        'img': 'http://img3m3.ddimg.cn/41/30/25172573-1_b_2.jpg',
        'intro': '44444444444444444444444444444444444',
        'douban': 9.3
      },
      {
        'id': '5', 
        'title': '变身', 
        'num': '60%', 
        'img': 'http://img3m8.ddimg.cn/95/25/24012248-1_b_11.jpg',
        'intro': '5555555555555555555555555555555555',
        'douban': 8.1
      }
    ];

    this.currentId = this.$route.query['book_id'];

    for(var i=0; i<this.bookInfo.length; i++) {
      if(this.currentId == this.bookInfo[i].id) {
        this.currentData = this.bookInfo[i];
      }
    }

    console.log(this.currentData);
  }
}
</script>

<style lang="less" src="../css/common.less"></style>
<style lang="less">
#books-detail {
  padding: 10px;
  .de-top {
    overflow: hidden;
    .de-img {
      float: left;
      width: 35%;
      img {
        width: 90%;
      }
    }
    .de-fen {
      float: left;
    }
    .de-list {
      li {
        line-height: 30px;
      }
    }
  }
  .de-bot {
    padding: 10px;
  }
}
</style>