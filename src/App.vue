<template>
  <Header/>
  <router-view/>
</template>
<script>
import {mapActions} from "vuex";
import Header from '@/components/__include/Header.vue'

export default {
  components: {Header},
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Ubuntu';
  src: url('@/assets/fonts/Ubuntu-Regular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Ubuntu';
  src: url('@/assets/fonts/Ubuntu-Medium.ttf');
  font-weight: 500;
}

@font-face {
  font-family: 'Ubuntu';
  src: url('@/assets/fonts/Ubuntu-Bold.ttf');
  font-weight: 700;
}

body {
  font-family: 'Ubuntu', sans-serif;
}

h1 {
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #0A1E32;
}

a {
  transition: all .3s ease-in-out;
  font-size: 16px;
  line-height: 24px;
  color: #464C58;
}

a:hover {
  text-decoration: none;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1400px;
  height: 100%;
}

.d-flex {
  display: flex;
}

.justify-content-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
}

.f-col {
  flex-direction: column;
}

.w-100 {
  width: 100%;
}
</style>
