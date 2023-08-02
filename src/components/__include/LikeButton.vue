<template>
  <button @click="toggleFavorite" @mouseenter="isHoverLike = true" @mouseleave="isHoverLike = false" class="btn-favorite-long" v-if="this.type === 'long'">
    <img :src="likeImage" alt="like-line">Избранное
  </button>
  <button @click="toggleFavorite" @mouseenter="isHoverLike = true" @mouseleave="isHoverLike = false" v-else>
    <img :src="likeImage" class="img-hover-btn" alt="like">
  </button>
</template>

<script>
export default {
  props: {
    favoriteProduct: Object,
    icontwo: String,
    type: String
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
          ? this.icontwo
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

<style scoped lang="scss">
button {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}

button.btn-favorite-long {
  display: flex;
  padding: 8px 34px 8px 37px;
  border-radius: 5px;
  border: 1px solid #0A1E32;
  align-items: center;
  font-weight: 700;
  color: #0A1E32;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 32px;
  font-family: 'Ubuntu', sans-serif;

  img {
    margin-right: 8px;
    width: 20px;
    height: 18px;
  }
}

button img.img-hover-btn {
  width: 30px;
  height: 30px;
  transition: all 0.3s ease-in-out;
}

button:hover img.img-hover-btn {
  transform: scale(1.2);
}
</style>
