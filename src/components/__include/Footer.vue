<template>
  <div class="footer">
    <div class="container">
      <div class="d-flex justify-content-between">
        <router-link to="/favorites">Избранное</router-link>
        <h2>8 800 888 00 88</h2>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.footer {
  width: 100%;
  bottom: 0;
  left: 0;
  background: #0A1E32;
  padding: 32px 0;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }
  h2 {
    color: #fff;
  }
}
</style>