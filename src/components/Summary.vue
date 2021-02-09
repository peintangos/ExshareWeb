<template>
  <div class="summary-main">
    <div class="summary-main-title">
      <div class="summary-text">Summary</div>
    </div>
    <div class="summary-main-upper-content">
      <div class="summary-main-upper-content-top">Vision</div>
      <div class="summary-main-upper-content-bottom">
        <div class="summary-main-upper-content-bottom-first">
          We create the world where everyone can share the experience
        </div>
        <div>誰もが自分の経験や才能を生かすことのできる社会の創設を。</div>
      </div>
    </div>
    <div class="summary-main-lower-content">
      <div class="summary-main-lower-content-top">Product</div>
      <div class="summary-main-lower-content-bottom">
        <div class="summary-main-lower-content-bottom-first">
          Exshare
        </div>
        <div>経験やスキルを共有することができるプラットフォームです。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.summary-main {
  background-color: white;
  height: 1080px;
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
}
.summary-text {
  font-family: "Arial";
  font-size: 64px;
  color: #344c4d;
  border-bottom: medium solid #344c4d;
  width: 292px;
}
.summary-main-upper-content {
  margin-left: 25px;
  margin-top: 25px;
}
.summary-main-upper-content-top {
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-color: #ffffff;
  text-align: center;
  line-height: 230px;
  font-family: "Arial";
  font-size: 48px;
  border: #e69326 solid 5px;
}
.summary-main-upper-content-bottom {
  display: flex;
  flex-direction: column;
  font-size: 48px;
}
.summary-main-upper-content-bottom-first {
  /* 目分量で調整 */
  margin-top: 65px;
  margin-bottom: 35px;
}
.summary-main-lower-content {
  margin-left: 25px;
  text-align: left;
}
.summary-main-lower-content-top {
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-color: #ffffff;
  text-align: center;
  line-height: 230px;
  font-family: "Arial";
  font-size: 48px;
  border: #e69326 solid 5px;
}
.summary-main-lower-content-bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: calc(50px + 115px);
  font-family: "Arial";
  font-size: 48px;
}
.summary-main-lower-content-bottom-first {
  /* 目分量で調整 */
  margin-top: 65px;
  margin-bottom: 35px;
}
</style>
