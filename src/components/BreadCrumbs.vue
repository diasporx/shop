<template>
  <div class="d-flex bread">
    <span v-for="(crumb, index) in breadcrumbs" :key="index">
      <router-link :to="crumb.to">{{ crumb.label }}</router-link>
      <span class="symbol" v-if="index < breadcrumbs.length - 1"> > </span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'BreadCrumbs',
  props: ['productId', 'productTitle'],
  computed: {
    breadcrumbs() {
      const matchedRoutes = this.$route.matched;

      const breadcrumbs = matchedRoutes.reduce((accumulator, route) => {
        if (route.name !== 'product-detail') {
          accumulator.push({
            label: route.meta.breadcrumbLabel || route.name || 'Главная',
            to: route.path,
          });
        }
        return accumulator;
      }, []);

      breadcrumbs.unshift({
        label: 'Главная',
        to: '/',
      });

      if (this.productId) {
        breadcrumbs.push({
          label: this.productTitle,
          to: `/product/${this.productId}`,
        });
      }

      return breadcrumbs;
    },
  },
};
</script>

<style scoped lang="scss">
.bread {
  margin: 32px 0 16px;
}
span.symbol {
  margin: 0 8px;
}
</style>