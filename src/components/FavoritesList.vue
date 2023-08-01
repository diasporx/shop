<template>
  <h2 class="empty-favorites" v-if="favorites.length === 0">Список избранного пуст</h2>
  <div class="blocks-products">
    <div class="card d-flex f-col" v-for="favorite in favorites" :key="favorite.id">
      <img :src="`${favorite.image}`">
      <div class="description d-flex f-col">
        <p>{{ favorite.title }}</p>
        <span>{{ favorite.price }} $</span>
      </div>
      <LikeButton :isProductLiked="true" :favoriteProduct="favorite" :twoIcon="require('@/assets/close.svg')"/>
    </div>
  </div>
</template>

<script>
import LikeButton from '@/components/__include/LikeButton.vue';

export default {
  components: {
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
