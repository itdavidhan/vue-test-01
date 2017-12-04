<template>
  <div class="footer">
     footer {{count}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'common-footer',
  data() {
    return {
      
    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    ...mapState(['count'])
  }
}
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #000;
  color: #FFF;
  z-index: 100;
}
</style>
