<template>
  <div class="header-content header-text-color">
    <img src="../assets/logo_new.svg" />
    <div class="nav-content" :class="{'position-fixed' : isScrollY}">
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
      navList: ["Summary", "Businnes", "Service", "Monetize", "Procedure"],
      scroll: this.scrollHeight,
    };
  },
  props: ["scrollHeight"],
  computed: {
    isScrollY: function() {
      return this.scrollHeight >= 200;
    }
  }
};
</script>

<style>
.header-content {
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
.position-fixed {
  position: fixed;
  z-index: 1;
  top: 0px;
}
</style>
