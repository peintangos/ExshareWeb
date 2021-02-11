<template>
  <div class="monetize-main">
    <div class="monetize-main-title">Monetize</div>
    <div class="monetize-main-content">
      <table class="vue_tbl">
        <thead>
          <tr>
            <th></th>
            <th class="monetize-left-header">Supplier</th>
            <th class="monetize-right-header">Buyer</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in rows"
            :key="row"
            :class="{
              'monetize-background-color-in-turns': getBackgroundColor(index),
            }"
          >
            <td>{{ row.name }}</td>
            <td>{{ row.supplier }}</td>
            <td>{{ row.buyer }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Monetize",
  data: function() {
    return {
      rows: [
        { name: "登録料", supplier: "980円(税込) / 月額", buyer: "なし" },
        { name: "手数料", supplier: "10% / 1案件", buyer: "なし" },
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
.monetize-main {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
}

.monetize-main-title {
  font-family: "Arial";
  font-size: 64px;
  color: #344c4d;
  border-bottom: medium solid #344c4d;
  width: 260px;
}
.monetize-main-content {
  margin-top: 50px;
  /* background-color: orange; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
th {
  font-family: "Arial";
  font-size: 36px;
  color: #344c4d;
  font-style: normal;
  font-weight: normal;
  min-width: 300px;
  border: none;
}
.monetize-left-header {
  background-color: #ece9ce;
}
.monetize-right-header {
  background-color: #f1bc77;
}
td {
  font-family: "Arial";
  font-size: 36px;
  color: #344c4d;
  font-style: normal;
  font-weight: normal;
}
tr {
  background-color: #ffffff;
}
.monetize-background-color-in-turns {
  background-color: #fafafa;
}
</style>
