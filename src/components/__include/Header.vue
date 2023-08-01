<template>
  <div class="header">
    <div class="container">
      <div class="d-flex w-100 justify-content-between">
        <div class="logo">
          <router-link to="/"><img alt="logo" src='@/assets/logo.svg'></router-link>
        </div>
        <div class="like d-flex align-items-center">
          <router-link to="/about"><img alt="logo" src='@/assets/like.svg'></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 11px 0 19.5px;
  border-bottom: 1px solid #0A1E32;
}
</style>

<script setup>

</script>