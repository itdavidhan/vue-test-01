<template>
  <div class="header">
     <h3 class="title">东野圭吾小屋</h3>
  </div>
</template>

<script>
export default {
  name: 'common-header'
}
</script>

<style>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #EEE;
  z-index: 100;
}
.header .title {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
</style>
