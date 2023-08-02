<template>
  <div class="content favorites">
    <div class="container">
      <BreadCrumbs/>
      <h1>Избранное</h1>
      <FavoritesList/>
    </div>
  </div>
</template>
<script>
import FavoritesList from "@/components/FavoritesList.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";

export default {
  components: {FavoritesList, BreadCrumbs}
}
</script>
<style>
.favorites {
  min-height: 100vh;
}
</style>