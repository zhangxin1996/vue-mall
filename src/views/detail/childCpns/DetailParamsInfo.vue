<template>
  <div class="detail-params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <div class="sizeInfo">
      <p>{{paramsInfo.sizeInfo.key}}</p>
      <table v-for="(itemx, index) in paramsInfo.sizeInfo.tables" :key="index">
        <tr v-for="(itemy, indey) in itemx" :key="indey">
          <td v-for="(itemz, indez) in itemy" :key="indez">{{itemz}}</td>
        </tr>
      </table>
    </div>
    <div class="productInfo">
      <p>{{paramsInfo.productInfo.key}}</p>
      <table>
        <tr class="productInfoTr" v-for="(itemx, index) in paramsInfo.productInfo.set" :key="index">
          <td v-for="(itemy, indey) in itemx" :key="indey">{{itemy}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .detail-params-info {
    width: 100%;
    padding: 20px 10px;
    border-bottom: 3px solid #e6e6e6;
    font-size: 12px;
  }

  .sizeInfo p, .productInfo p {
    margin: 10px 0;
    font-size: 14px;
    font-weight: bold;
  }

  .sizeInfo table, .productInfo table {
    width: 100%;
  }
  table tr {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
  }
  .sizeInfo table tr td {
    flex: 1;
  }
  .productInfo table tr>td:nth-of-type(1) {
    width: 60px;
  }
  .productInfo table tr>td:nth-of-type(2) {
    flex: 1;
    color: var(--color-high-text);
  }
</style>