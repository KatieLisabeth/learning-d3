<template>
    <div ref="chart"></div>
</template>

<script lang="ts">
import * as d3 from "d3";
import { defineComponent } from "vue";

interface DataItem {
    category: string;
    value: number;
}

export default defineComponent({
    name: "BarChart",
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
            // Set up dimensions and margins
            const margin = { top: 20, right: 30, bottom: 30, left: 40 };
            const width = 400 - margin.left - margin.right;
            const height = 300 - margin.top - margin.bottom;

            // Create SVG element
            const svg = d3
                .select(this.$refs.chart)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

            // Create scales
            const x = d3
                .scaleBand()
                .domain(this.data.map((d) => d.category))
                .range([0, width])
                .padding(0.1);
            const y = d3
                .scaleLinear()
                .domain([
                    0,
                    d3.max(this.data, (d: DataItem) => Number(d.value)) || 0,
                ])
                .nice()
                .range([height, 0]);

            // Draw bars
            svg.selectAll(".bar")
                .data(this.data)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", (d: any) => x(d.category) || 0)
                .attr("width", x.bandwidth())
                .attr("y", (d: any) => y(d.value))
                .attr("height", (d: any) => height - y(d.value))
                .attr("fill", "steelblue");
        },
    },
});
</script>

<style scoped>
.bar {
    fill: steelblue;
}
</style>
