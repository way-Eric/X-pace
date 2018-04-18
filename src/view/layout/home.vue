<template>
  <Layout>
    <h2 class="tl mb20 mt20 top">数据中心</h2>
    <Card class="card layout-content pl20" id="card">
    </Card>
  </Layout>
</template>

<script>
import * as d3 from 'd3'
import TWEEN from 'tween.js'
export default {
  mounted () {
    this.createSvg()
  },
  methods: {
    createSvg () {
      let i = 0
      let svg = d3.select('#card').append('svg')
        .attr('width', 800)
        .attr('height', 500)
        .style('stroke', d3.rgb(0, 0, 0))
      svg.append('rect')
        .attr('width', 800)
        .attr('height', 500)
        .on('ontouchstart' in document ? 'touchmove' : 'mousemove', particle)
      function particle () {
        let m = d3.mouse(this)
        svg.insert('circle', 'rect')
          .attr('cx', m[0])
          .attr('cy', m[1])
          .attr('r', 1e-6)
          .style('stroke', d3.hsl((i = (i + 1) % 360), 1, 0.5))
          .style('stroke-opacity', 1)
          .transition()
          .duration(2000)
          .ease(Math.sqrt)
          .attr('r', 100)
          .style('stroke-opacity', 1e-6)
          .remove()
        d3.event.preventDefault()
      }
    }
  }
}
</script>

<style scoped lang="less">
  .top {
    font-size: 18px;
    height: 18px;
    line-height: 18px;
  }
  .card {
    text-align: left;
    min-height: 600px;
    overflow: hidden;
    border-radius: 4px;
    background: #fff;
    border: none;
    font-size: 14px;
    &:hover {
      box-shadow: none;
    }
  }
</style>
