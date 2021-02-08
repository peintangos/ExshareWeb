<template>
  <div class="all-content">
    <HeaderContent/>
    <MainContent/>
    <div class="bottom"></div>
  </div>
</template>

<script>
import HeaderContent from "./components/HeaderContent.vue"
import MainContent from "./components/MainContent"

export default {
  name: "LayoutDefault",
  components: {
    HeaderContent,
    MainContent
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>

<style>
.all-content {
  height: 1000px;
  font-family: 'Arial';
}
</style>
