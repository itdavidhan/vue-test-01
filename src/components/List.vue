<template>
  <li class="book-item">
    <router-link :to="{ path: 'detail', query: { 'book_id': id }}" class="book-list-link">
      <div class="book-list-pic">
        <img :src="img" alt="">
      </div>
      <div class="book-list-desc">
          <p class="book-list-name">{{ title }}</p>
          <router-link to="/chart"  class="chart">
            <p class="book-list-num">推荐指数：{{ num }}</p>
          </router-link>
      </div>
    </router-link>
  </li>
</template>

<script>

export default {
  name: 'list',
  props: ['num', 'title', 'img', 'id']
}
</script>

<style lang="stylus">
.book-item
  float: left;
  width: 50%;
  margin: 10px auto;
  img
    width: 70%;
  .book-list-name
    font-weight: bold;
  a 
    text-decoration: none;
    color: #333;
</style>