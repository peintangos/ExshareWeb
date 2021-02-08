<template>
  <div class="main-content">
    <TopImage />
    <Summary />
    <Business />
    <Service />
    <Monetize />
    <Procedure />
  </div>
</template>

<script>
import TopImage from "../components/TopImage.vue";
import Summary from "../components/Summary.vue";
import Business from "../components/Business.vue";
import Service from "../components/Summary.vue";
import Monetize from "../components/Monetize.vue";
import Procedure from "../components/Procedure.vue";
export default {
  name: "MainContent",
  components: {
    TopImage,
    Summary,
    Business,
    Service,
    Monetize,
    Procedure
  }
};
</script>

<style>
.main-content {
  height: 4000px;
  background-color: darkgrey;
  text-align: center;
  margin-top: 50px;
}
.main-text-color {
  color: #344c4d;
}
</style>
