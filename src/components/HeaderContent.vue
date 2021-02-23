<template>
  <div class="header-content header-text-color">
    <img src="../assets/logo_new.svg" />
    <div class="nav-content" :class="{ 'position-fixed': isScrollY }">
      <div v-for="navItem in navList" :key="navItem" class="header-text">
        <a
          v-scroll-to="'#' + navItem"
          v-on:mouseover="mouseOverAction(navItem)"
          v-on:mouseleave="mouseLeaveAction"
          v-bind:class="{ active: isSelectedItem(navItem) }"
        >
          {{ navItem }}
        </a>
      </div>
    </div>
    <div :class="{ 'is-fixed': isScrollY }" v-show="isScrollY">
      <img src="../assets/logo_new.svg" class="header-logo"/>
    </div>
  </div>
</template>

<script>
import VueScrollTo from "vue-scrollto";
export default {
  name: "HeaderContent",
  data() {
    return {
      navList: ["Summary", "Businnes", "Service", "Monetize", "Procedure"],
      scroll: this.scrollHeight,
      selectItem: "f",
    };
  },
  props: ["scrollHeight"],
  computed: {
    isScrollY: function() {
      console.log(this.scrollHeight);
      return this.scrollHeight >= 500;
    },
    isActiveComputed() {
      return this.isMouseOver;
    },
  },
  methods: {
    mouseOverAction(navItem) {
      console.log(navItem)
      this.selectItem = navItem;
    },
    mouseLeaveAction() {
      this.selectItem = "";
    },
    isSelectedItem(navItem) {
      console.log("g");
      return this.selectItem === navItem;
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: #344c4d;
}
.active {
  color: #e69326;
  transition: all 2s 0s ease;
}
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
  min-width: 1000px;
}
@media screen and (max-width: 1000px) {
    .nav-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
.header-logo {
  z-index: 3;
}
.is-fixed {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color:#e69326;
  color: white;
  font-size: 30px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 1;
  width: 100%;
  font-weight: bold;
  animation-name: fadedown;
  animation-duration: 2s;
  opacity: 0.9;
}
@keyframes fadedown {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.9;
  }
}
.header-logo{
  background-color: white;
}
</style>
