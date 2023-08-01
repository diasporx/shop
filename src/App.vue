<template>
  <Header/>
  <router-view/>
</template>
<script>
import Header from '@/components/__include/Header.vue'
export default {
  components: {Header}
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  display: flex;
  max-width: calc(100% - 260px);
  height: 100%;
  margin: 0 auto;
}
.d-flex {
  display: flex;
}
.justify-content-between {
  justify-content: space-between;
}
.align-items-center {
  align-items: center;
}
.w-100 {
  width: 100%;
}
</style>
