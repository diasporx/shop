<template>
  <div class="d-flex bread">
    <span v-for="(crumb, index) in breadcrumbs" :key="index">
      <router-link :to="crumb.to">{{ crumb.label }}</router-link>
      <span v-if="index < breadcrumbs.length - 1"> > </span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'BreadCrumbs',
  computed: {
    breadcrumbs() {
      const matchedRoutes = this.$route.matched;

      const breadcrumbs = matchedRoutes.map((route) => {
        return {
          label: route.meta.breadcrumbLabel || route.name || 'Главная',
          to: route.path,
        };
      });

      breadcrumbs.unshift({
        label: 'Главная',
        to: '/',
      });

      return breadcrumbs;
    },
  },
};
</script>

<style scoped lang="scss">
.bread {
  margin: 32px 0 16px;
}
</style>