<template>
  <div class="blocks-products">
    <div class="card d-flex f-col" v-for="item in items" :key="item.id">
      <div class="img-card-container">
        <img class="image-product" :src="`${item.image}`">
      </div>
      <div class="description d-flex f-col">
        <p>{{ item.title }}</p>
        <span>{{ item.price }} $</span>
      </div>
      <LikeButton :isProductLiked="isItemLiked(item.id)" :favoriteProduct="item" :icontwo="btnHoverValue"/>
      <router-link class="link-in-product" :to="{ name: 'product-detail', params: { id: item.id } }"></router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LikeButton from '@/components/__include/LikeButton.vue';

export default {
  props: {
    direction: Array,
  },
  components: { LikeButton },
  computed: {
    ...mapState(['products', 'favorites']),
    items() {
      return this.$route.name === 'favorites' ? this.favorites : this.products;
    },
    btnHoverValue() {
      return this.$route.name === 'favorites' ? require('@/assets/close.svg') : require('@/assets/like.svg');
    }
  },
  methods: {
    isItemLiked(itemId) {
      return this.favorites.some((item) => item.id === itemId);
    },
  },
};
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
    transition: all .3s ease;
    position: relative;
    a.link-in-product {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    button {
      background: transparent;
      z-index: 3;
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

    .img-card-container {
      height: 336px;
      overflow: hidden;
      width: 320px;
      display: flex;
      align-items: center;
      img.image-product {
        padding: 25px;
        width: 100%;
      }
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

  .card:hover {
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);
  }
}
</style>