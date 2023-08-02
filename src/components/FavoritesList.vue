<template>
  <h2 class="empty-favorites" v-if="favorites.length === 0">Список избранного пуст</h2>
  <Products />
</template>

<script>
import LikeButton from '@/components/__include/LikeButton.vue';
import Products from "@/components/Products.vue";

export default {
  components: {
    Products,
    LikeButton
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    }
  }
};
</script>

<style scoped>
h2.empty-favorites {
  color: #464C58;
  font-weight: 500;
  font-size: 32px;
  margin-top: 123px;
  text-align: center;
}
</style>
