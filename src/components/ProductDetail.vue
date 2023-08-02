<template>
  <div class="content">
    <div class="container">
      <BreadCrumbs :productId="oneproduct.id" :productTitle="oneproduct.title"/>
      <div class="product-detail">
        <div class="d-flex container-detail">
          <div class="img-detail">
            <img :src="oneproduct.image" :alt="oneproduct.title">
          </div>
          <div class="description-detail">
            <h1>{{ oneproduct.title }}</h1>
            <p>{{ oneproduct.description }}</p>
            <span>{{ oneproduct.price }} $</span>
            <div class="w-100 d-block">
              <LikeButton :type="'long'" :icontwo="require('@/assets/like.svg')" :isProductLiked="isItemLiked(oneproduct.id)" :favoriteProduct="oneproduct"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import LikeButton from "@/components/__include/LikeButton.vue";

export default {
  components: {LikeButton, BreadCrumbs},
  props: ['id'],
  created() {
    this.fetchProductById(this.id);
  },
  computed: {
    ...mapState(['oneproduct', 'favorites'])
  },
  methods: {
    ...mapActions(['fetchProductById']),
    isItemLiked(itemId) {
      return this.favorites.some((item) => item.id === itemId);
    },
  },
};
</script>

<style scoped lang="scss">
.product-detail {
  min-height: 715px;
}
.container-detail {
  margin: 16px 0;

  .img-detail {
    max-height: 715px;
    padding: 20px;

    img {
      height: 100%;
    }
  }

  .description-detail {
    h1 {
      margin-bottom: 24px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 24px;
      color: rgba(70, 76, 88, 1);
    }

    span {
      margin-bottom: 24px;
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
      color: #0A1E32;
      display: block;
    }

  }
}
</style>