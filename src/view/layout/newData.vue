<template>
  <Layout>
    <h2 class="tl mb20 mt20 top">基础数据</h2>
    <Card class="card layout-content pl20" id="card">
      <svg width="960" height="600"></svg>
    </Card>
  </Layout>
</template>

<script>
import * as d3 from 'd3'
import axios from '@/config/axios.config'
import api from '@/config/api.config'

export default {
  data () {
    return {
      miserables: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get(api.common.baseData).then(res => {
        this.miserables = res.data
      })
      this.createSvg()
    },
    createSvg () {
      let svg = d3.select('svg')
      let width = +svg.attr('width')
      let height = +svg.attr('height')
      let color = d3.scaleOrdinal(d3.schemeCategory20)

      let simulation = d3.forceSimulation()
        .force('link', d3.forceLink().id(function (d) {return d.id}))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(width / 2, height / 2))

      d3.json(this.miserables, function (error, graph) {
        if (error) throw error
        console.log(graph)
        let link = svg.append('g')
          .attr('class', 'links')
          .selectAll('line')
          .data(graph.links)
          .enter()
          .append('line')
          .attr('stroke-width', function (d) {return Math.sqrt(d.value)})

        let node = svg.append('g')
          .attr('class', 'nodes')
          .selectAll('circle')
          .data(graph.nodes)
          .enter()
          .append('circle')
          .attr('r', 5)
          .attr('fill', function (d) {return color(d.group)})
          .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended))

        node.append('title')
          .text(function (d) {return d.id})

        simulation
          .nodes(graph.nodes)
          .on('tick', ticked)

        simulation.force('link')
          .links(graph.links)

        function ticked () {
          link
            .attr('x1', function (d) {return d.source.x})
            .attr('y1', function (d) {return d.source.y})
            .attr('x2', function (d) {return d.target.x})
            .attr('y2', function (d) {return d.target.y})

          node
            .attr('cx', function (d) {return d.x})
            .attr('cy', function (d) {return d.y})
        }
      })

      function dragstarted (d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
      }

      function dragged (d) {
        d.fx = d3.event.x
        d.fy = d3.event.y
      }

      function dragended (d) {
        if (!d3.event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
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
