<template>
  <div class="top-image-main">
    <div class="top-image-bottom">
      <img src="../assets/logo_new.svg" class="top-image-bottom-image" />
      <div class="top-image-bottom-text">Make your experience value</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopImage",
};
</script>

<style scoped>
.top-image-main {
  background-color: darkkhaki;
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.top-image-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.top-image-bottom-image {
  width: 300px;
  height: 300px;
}
.top-image-bottom-text {
  font-size: 64px;
  color: #ffffff;
  align-self: center;
}
</style>
