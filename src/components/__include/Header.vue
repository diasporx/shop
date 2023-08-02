<template>
  <div class="header">
    <div class="container">
      <div class="d-flex w-100 justify-content-between">
        <div class="logo">
          <router-link to="/"><img alt="logo" src='@/assets/logo.svg'></router-link>
        </div>
        <div class="like d-flex align-items-center">
          <router-link to="/favorites" class="d-flex"><img alt="logo" src='@/assets/like.svg'><span v-if="favorites.length > 0">{{favorites.length}}</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 11px 0 19.5px;
  border-bottom: 1px solid #0A1E32;
}
.like {
  position: relative;
  span {
    background: #EB4C47;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: -7px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    font-weight: 700;
  }
}
</style>