<template>
  <div class="service-main">
    <div class="service-text">
      Service
    </div>
    <div class="serivce-main-content">
      <div
        v-for="skill in skillListItems"
        :key="skill"
        class="service-skill-section"
      >
        <div class="service-skill-title">{{ skill.name }}</div>
        <div
          v-for="(value, index) in skill.data"
          :key="value"
          class="service-skill-list"
          :class="{ 'service-background-color-in-turns': getBackgroundColor(index) }"
        >
          {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      skillListItems: [
        {
          name: "スキル・サービス検索機能",
          data: [
            "豊富なカテゴリーからスキル・サービスをカテゴリー検索が可能です。",
            "任意のキーワードで検索が可能です。",
            "よく検索されているカテゴリーを検索できるトレンド検索が可能です。",
          ],
        },
        {
          name: "チャット機能",
          data: [
            "SupplierとBuyerの間で、代金やサービス内容についての交渉が可能です。",
          ],
        },
        {
          name: "レーティング機能",
          data: [
            "BuyerがSupplierを評価することで、個人のスキル・サービスのミスマッチを防ぎます。",
          ],
        },
        {
          name: "クオリティ保証機能",
          data: [
            "Supplierの実績や経歴を精査し、ラベル付することでSupplierの品質を評価します。",
          ],
        },
      ],
    };
  },
  methods: {
    getBackgroundColor(index) {
      return index % 2 == 0;
    },
  },
};
</script>

<style scoped>
.service-main {
  background-color: #ffffff;
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
}
.service-text {
  font-family: "Arial";
  font-size: 64px;
  color: #344c4d;
  border-bottom: medium solid #344c4d;
  width: 213px;
}
.serivce-main-content {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.service-skill-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.service-skill-title {
  background-color: #ece9ce;
  font-size: 48px;
  color: #344c4d;
  font-family: "Arial";
  font-style: normal;
  text-align: left;
  height: 160px;
  line-height: 160px;
  margin-left: 50px;
  padding-left: 25px;
}
.service-skill-list {
  font-size: 36px;
  color: #344c4d;
  font-family: "Arial";
  align-self: flex-start;
  margin-left: 50px;
  padding-left: 50px;
  height: 120px;
  line-height: 120px;
}
.service-background-color-in-turns {
  background-color: #fafafa;
  width: calc(100% - 50px);
  text-align: left;
}
</style>
