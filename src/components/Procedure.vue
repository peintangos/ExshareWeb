<template>
  <div class="procedure-main" id="Procedure">
    <div class="procedure-main-text">Procedure</div>
    <div class="procedure-main-section">
      <div class="procedure-main-upper">
        <div class="procedure-main-upper-label">
          <div class="procedure-main-upper-rec"></div>
          <div>Buyer</div>
        </div>
        <div>
          <div class="procedure-main-upper-title">4Phases</div>
          <div class="procedure-upper-circles">
            <div
              v-for="(buyerItem,index) in buyerItems"
              :key="index"
              class="procedure-upper-circle"
            >
              {{ buyerItem.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="procedure-main-lower">
        <div class="procedure-main-lower-label">
          <div class="procedure-main-lower-rec"></div>
          <div>Supplier</div>
        </div>
        <div>
          <div class="procedure-main-lower-title">4Phases</div>
          <div class="procedure-lower-circles">
            <div
              v-for="(supplierItem,index) in supplierItems"
              :key="index"
              class="procedure-lower-circle"
            >
              {{ supplierItem.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Procedure",
  data: function() {
    return {
      buyerItems: [
        { name: "スキル・サービスの検索" },
        { name: "Supplierとのやり取り" },
        { name: "代金の支払い" },
        { name: "Supplierへの評価" },
      ],
      supplierItems: [
        { name: "スキル・サービスの掲載・PR" },
        { name: "Buyerとのやり取り" },
        { name: "スキル・サービスの提供" },
        { name: "代金の受け取り" },
      ],
    };
  },
};
</script>
スキル・サービス の掲載・PR
<style scoped>
.procedure-main {
  background-color: #ffffff;
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
}
.procedure-main-text {
  font-family: "Arial";
  font-size: 64px;
  color: #344c4d;
  border-bottom: medium solid #344c4d;
  width: 295px;
}
.procedure-main-section {
  margin-top: 50px;
  margin-left: 50px;
}

.procedure-main-upper {
  display: flex;
  flex-direction: column;
}
.procedure-main-upper-label {
  font-family: "Arial";
  font-size: 64px;
  line-height: 64px;
  color: #344c4d;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.procedure-main-upper-rec {
  background-color: #344c4d;
  width: 25px;
  height: 72px;
  margin-right: 24px;
}
.procedure-upper-circles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 50px;
}
.procedure-upper-circle {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: #344c4d solid 5px;
  line-height: 350px;
  font-size: 24px;
}
.procedure-main-upper-title {
  font-family: "Arial";
  font-size: 48px;
  color: #344c4d;
  margin-top: 50px;
}

.procedure-main-upper {
  display: flex;
  flex-direction: column;
}
.procedure-main-upper-label {
  font-family: "Arial";
  font-size: 64px;
  line-height: 64px;
  color: #344c4d;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.procedure-main-upper-rec {
  background-color: #344c4d;
  width: 25px;
  height: 72px;
  margin-right: 24px;
}
.procedure-upper-circles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 50px;
}
.procedure-upper-circle {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: #344c4d solid 5px;
  line-height: 350px;
  font-size: 24px;
}
.procedure-main-upper-title {
  font-family: "Arial";
  font-size: 48px;
  color: #344c4d;
  margin-top: 50px;
}

.procedure-main-lower {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
.procedure-main-lower-label {
  font-family: "Arial";
  font-size: 64px;
  line-height: 64px;
  color: #f1bc77;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.procedure-main-lower-rec {
  background-color: #f1bc77;
  width: 25px;
  height: 72px;
  margin-right: 24px;
}
.procedure-lower-circles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 50px;
}
.procedure-lower-circle {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: #f1bc77 solid 5px;
  line-height: 350px;
  font-size: 24px;
}
.procedure-main-lower-title {
  font-family: "Arial";
  font-size: 48px;
  color: #f1bc77;
  margin-top: 50px;
}

.procedure-main-lower {
  display: flex;
  flex-direction: column;
}
.procedure-main-lower-label {
  font-family: "Arial";
  font-size: 64px;
  line-height: 64px;
  color: #f1bc77;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.procedure-main-lower-rec {
  background-color: #f1bc77;
  width: 25px;
  height: 72px;
  margin-right: 24px;
}
.procedure-lower-circles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 50px;
}
.procedure-lower-circle {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: #f1bc77 solid 5px;
  line-height: 350px;
  font-size: 24px;
}
.procedure-main-lower-title {
  font-family: "Arial";
  font-size: 48px;
  color: #f1bc77;
  margin-top: 50px;
}
</style>
