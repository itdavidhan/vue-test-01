<template>
  <li class="book-item">
    <router-link to="/detail"  class="book-list-link">
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
  props: ['num', 'title', 'img']
}
</script>

<style>
.book-item {
  float: left;
  width: 50%;
  margin: 10px auto;
}
.book-item img {
  width: 70%;
}
</style>