<template>
  <div class="content">
    <div class="banner"></div>
    <div class="container">
      <Products/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Products from "@/components/Products.vue";
export default {
  name: 'HomeView',
  components:{Products}
}
</script>
<style scoped lang="scss">
.banner {
  width: 100%;
  height: 505px;
  background: url('@/assets/bg.jpg');
}
</style>
