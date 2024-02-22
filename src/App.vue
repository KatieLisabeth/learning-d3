<template>
  <button @click="changeData">Change Data</button>
  <PieChart :data="data" />
  <BarChart :data="data" />
</template>

<script lang="ts">
import BarChart from "./components/BarChart.vue";
import PieChart from "./components/PieChart.vue";

export default {
  name: "App",
  components: {
    PieChart,
    BarChart,
  },
  data() {
    return {
      data: [
        { category: "A", value: 20 },
        { category: "B", value: 50 },
        { category: "C", value: 30 },
        { category: "D", value: 40 },
        { category: "E", value: 60 },
      ],
    };
  },
  methods: {
    changeData() {
      console.log("changeData clicked");
    },
  },
};
</script>
