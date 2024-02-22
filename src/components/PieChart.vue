<template>
  <div ref="chart"></div>
</template>

<script lang="ts">
import * as d3 from "d3";

interface DataItem {
  category: string;
  value: number;
}

export default {
  props: {
    data: {
      type: Array as () => DataItem[],
      required: true,
    },
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const width = 400;
      const height = 400;
      const radius = Math.min(width, height) / 2;

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const arc = d3
        .arc()
        .innerRadius(0)
        .outerRadius(radius - 10)
        .padAngle(0.03)
        .cornerRadius(8);

      const pie = d3.pie().value((d: any) => d.value);

      const chart = d3
        .select(this.$refs.chart as HTMLElement)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      const arcs = chart
        .selectAll(".arc")
        .data(pie(this.data))
        .enter()
        .append("g")
        .attr("class", "arc");

      arcs
        .append("path")
        .attr("d", arc as any)
        .attr("fill", (d: any) => color(d.data.category));

      arcs
        .append("text")
        .attr("transform", (d: any) => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .text((d: any) => d.data.category);
    },
  },
};
</script>
