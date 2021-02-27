<template>
  <div class="top-image-main">
    <img src="../assets/earth.jpg" class="top-image-content" />
    <div class="top-image-bottom">
      <img src="../assets/logo_new.svg" class="top-image-bottom-image" />
      <div class="top-image-bottom-text">
        Make your <span class="primary-text-color">ex</span>perience value
      </div>
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
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.top-image-content {
  width: 100%;
  height: 100%;
  position: absolute;
}
@media screen and (max-width: 1000px) {
  .top-image-content {
    display: none;
  }
}
.top-image-bottom {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
@media screen and (max-width: 1000px) {
  .top-image-bottom  {
    display: none;
  }
}

@media screen and (max-width: 1000px) {
  .top-image-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.top-image-bottom-image {
  width: 300px;
  height: 300px;
  z-index: 1;
}
.top-image-bottom-text {
  font-size: 64px;
  color: #ffffff;
  align-self: center;
  z-index: 1;
}
@media screen and (max-width: 1000px) {
  .top-image-bottom-text {
    display: none;
  }
}
</style>
