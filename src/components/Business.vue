<template>
  <div class="business-main">
    <div class="business-text">Bussiness</div>
    <img src="../assets/business_new.png" class="business-main-img" />
  </div>
</template>

<script>
export default {
  name: "Business",
};
</script>

<style scoped>
.business-main {
  background-color: #fafafa;
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
}
.business-main-img {
  width: 100%;
}
.business-text {
  font-family: "Arial";
  font-size: 64px;
  color: #344c4d;
  border-bottom: medium solid #344c4d;
  width: 292px;
}
</style>
