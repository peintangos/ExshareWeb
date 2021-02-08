<template>
  <div class="header-content header-text-color">
    <img src="../assets/logo_new.svg" />
    <div class="nav-content">
      <div v-for="navItem in navList" :key="navItem" class="header-text">
        <div>{{ navItem }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderContent",
  data() {
    return {
      navList: ["Summary", "Businnes", "Service", "Monetize", "Procedure"]
    };
  },
};
</script>

<style>
.header-content {
  background-color: bisque;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-text-color {
  /* スペースアラウンドでよしなにやりたいので、幅を固定 */
  /* width: 800px; */
}
.header-text {
  font-size: 36px;
  color: #344c4d;
}
.nav-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 1012px;
}
</style>
