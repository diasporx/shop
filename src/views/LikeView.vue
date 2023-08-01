<template>
  <div class="content">
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