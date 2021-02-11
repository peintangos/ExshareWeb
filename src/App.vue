<template>
  <div class="all-content">
    <HeaderContent :scrollHeight="scrollY"/>
    <MainContent />
    <div class="bottom"></div>
  </div>
</template>

<script>
import HeaderContent from "./components/HeaderContent.vue";
import MainContent from "./components/MainContent";

export default {
  name: "LayoutDefault",
  components: {
    HeaderContent,
    MainContent
  },

  data() {
    return {
      leftDrawerOpen: false,
      scrollY: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style>
.all-content {
  height: 1000px;
  font-family: "Arial";
}
.primary-text-color {
  color: #e69326;
}
</style>
