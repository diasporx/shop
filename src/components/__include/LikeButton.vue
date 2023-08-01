<template>
  <button @click="toggleFavorite" @mouseenter="isHoverLike = true" @mouseleave="isHoverLike = false">
    <img :src="likeImage" alt="like">
  </button>
</template>

<script>
export default {
  props: {
    favoriteProduct: Object,
  },
  data() {
    return {
      isHoverLike: false
    };
  },
  computed: {
    isProductLiked() {
      return this.$store.state.favorites.some((product) => product.id === this.favoriteProduct.id);
    },
    likeImage() {
      return this.isProductLiked || this.isHoverLike
          ? require('@/assets/like.svg')
          : require('@/assets/like-line.svg');
    }
  },
  methods: {
    toggleFavorite() {
      if (this.isProductLiked) {
        this.removeFromFavorites(this.favoriteProduct.id);
      } else {
        this.addToFavorites(this.favoriteProduct);
      }
    },
    addToFavorites(product) {
      this.$store.dispatch('addToFavorites', product);
    },
    removeFromFavorites(productId) {
      this.$store.dispatch('removeFromFavorites', productId);
    }
  }
};
</script>

<style>
button {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}

button img {
  width: 30px;
  height: 30px;
  transition: all 0.3s ease-in-out;
}

button:hover img {
  transform: scale(1.2);
}
</style>
