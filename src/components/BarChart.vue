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
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const width = 400 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      const svg = d3
        .select(this.$refs.chart as HTMLElement)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3
        .scaleBand<string>()
        .range([0, width])
        .padding(0.1)
        .domain(this.data.map((d: DataItem) => d.category));

      const y = d3
        .scaleLinear<number>()
        .range([height, 0])
        .domain([0, d3.max(this.data, (d: DataItem) => d.value) || 0]);

      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append("g").call(d3.axisLeft(y));

      svg
        .selectAll(".bar")
        .data(this.data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d: DataItem) => x(d.category) || 0)
        .attr("width", x.bandwidth())
        .attr("y", (d: DataItem) => y(d.value))
        .attr("height", (d: DataItem) => height - y(d.value))
        .attr("fill", "steelblue");
    },
  },
};
</script>
