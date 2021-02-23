<template>
  <div class="summary-main" id="Summary">
    <div class="summary-main-title">
      <div class="summary-text">Summary</div>
    </div>
    <div class="summary-main-upper-content">
      <div class="summary-main-upper-content-top">Vision</div>
      <div class="summary-main-upper-content-bottom">
        <div class="summary-main-upper-content-bottom-first">
          We create the world where everyone can share the
          <span class="primary-text-color">ex</span>perience
        </div>
        <div>誰もが自分の<span class="primary-text-color">経</span>験や才能を生かすことのできる社会の創設を。</div>
      </div>
    </div>
    <div class="summary-main-lower-content">
      <div class="summary-main-lower-content-top">Product</div>
      <div class="summary-main-lower-content-bottom">
        <div class="summary-main-lower-content-bottom-first">
          <span class="primary-text-color">Ex</span>share
        </div>
        <div><span class="primary-text-color">経</span>験やスキルを共有することができるプラットフォームです。</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.summary-main {
  background-color: white;
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
  margin-bottom: 25px;
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
  margin-left: calc(230px / 2);
  font-family: "Arial";
  font-size: 48px;
}
.summary-main-lower-content-bottom-first {
  /* 目分量で調整 */
  margin-top: 65px;
  margin-bottom: 35px;
}
</style>
