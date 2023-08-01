<template>
  <div class="blocks-products">

    <div class="card d-flex f-col" v-for="product in products" :key="product.id">
      <img :src="`${product.image}`">
      <div class="description d-flex f-col">
        <p>{{ product.title }}</p>
        <span>{{ product.price }} $</span>
      </div>
      <LikeButton :isProductLiked="isProductLiked(product.id)" :favoriteProduct="product" />
<!--      <button><img src='@/assets/like-line.svg' alt="like"></button>-->
    </div>

  </div>
</template>
<script>
import {mapState, useStore} from "vuex";
import LikeButton from "@/components/__include/LikeButton.vue";
export default {

  components:{LikeButton},
  computed: {
    ...mapState(['products']),
    products() {
      return this.$store.state.products;
    },
    favorites() {
      return this.$store.state.favorites;
    }
  },
  methods: {
    isProductLiked(productId) {
      return this.favorites.some((product) => product.id === productId);
    }
  }
}
</script>
<style lang="scss">
.blocks-products {
  padding: 112px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 39px 40px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .card {
    position: relative;
    button {
      background: transparent;
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      img {
        width: 24px;
        height: 22px;
      }
    }
    button:hover {
      cursor: pointer;
    }
    img {
      width: 320px;
      height: 336px;
    }

    .description {
      text-align: center;
      margin: 16px auto;
      max-width: calc(100% - 40px);

      p {
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 250px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      span {
        font-weight: 700;
        line-height: 24px;
        font-size: 16px;
        width: 100%;
      }
    }
  }
}
</style>