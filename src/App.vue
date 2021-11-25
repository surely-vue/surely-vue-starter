<template>
  <s-table
    :columns="columns"
    :scroll="{ y: 400 }"
    :pagination="false"
    :data-source="dataSource"
  ></s-table>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
const columns = [
  {
    title: "Full Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Column 1",
    dataIndex: "address",
  },
  {
    title: "Column 2",
    dataIndex: "address",
  },
  {
    title: "Column 3",
    dataIndex: "address",
  },
  {
    title: "Column 4",
    dataIndex: "address",
  },
  {
    title: "Column 5",
    dataIndex: "address",
  },
];
export default defineComponent({
  setup() {
    console.log("s-table setup");
    const data = [];

    for (let i = 0; i < 1000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
      });
    }

    return {
      dataSource: ref(data),
      columns: ref(columns),
    };
  },
});
</script>
