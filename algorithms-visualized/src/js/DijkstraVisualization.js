import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { solveDijkstra } from "./dijkastraSolver";
import { generateRandomGraph } from "./utils";

const DijkstraVisualization = () => {
  const svgRef = useRef(null);

  const graph = generateRandomGraph(26, 50);

  const startNodeId = "B";
  const order = solveDijkstra(graph, startNodeId);

  const width = 1200;
  const height = 500;

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const link = svg
      .selectAll("line")
      .data(graph.links)
      .enter()
      .append("line")
      .style("stroke", "black")
      .attr("marker-end", "url(#arrow)");

    // var div = d3
    //   .select("body")
    //   .append("div")
    //   .attr("class", "tooltip-donut")
    //   .style("opacity", 0);

    const node = svg
      .selectAll(".node")
      .data(graph.nodes)
      .enter()
      .append("g")
      .attr("class", "node");
    //   .on("mouseover", function (event, graph) {
    //     const [x, y] = d3.pointer(event);
    //     d3.select(this).transition().duration(50).attr("opacity", "0.7");
    //     div.transition().duration(50).style("opacity", 1); //makes div appear
    //     div.style("left", x + "px").style("top", y + "px");
    //   })
    //   .on("mouseout", function (d, i) {
    //     d3.select(this).transition().duration(50).attr("opacity", "1");
    //     div.transition().duration("50").style("opacity", 0); //makes div disappear
    //   });

    node.append("circle").attr("r", 15).style("fill", "black");

    node
      .append("text")
      .text((d) => d.id)
      .attr("text-anchor", "middle")
      .attr("dy", 6)
      .style("fill", "white")
      .style("font-size", "12px");

    const linkLabels = svg
      .selectAll(".link-label")
      .data(graph.links)
      .enter()
      .append("text")
      .attr("class", "link-label")
      .text((d) => d.weight)
      .attr("text-anchor", "middle")
      .attr("dy", -5)
      .style("fill", "black");

    const simulation = d3
      .forceSimulation(graph.nodes)
      .force(
        "link",
        d3
          .forceLink(graph.links)
          .id((d) => d.id)
          .distance((d) => d.weight * 30)
      )
      .force("charge", d3.forceManyBody().strength(-150))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX(width / 2).strength(0.1))
      .force("y", d3.forceY(height / 2).strength(0.1));

    // Add arrow markers
    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrow")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 55)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5");

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      linkLabels
        .attr("x", (d) => (d.source.x + d.target.x) / 2)
        .attr("y", (d) => (d.source.y + d.target.y) / 2);

      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    simulation.nodes(graph.nodes).on("end", () => {
      if (Array.isArray(order)) {
        node
          .transition()
          .duration(1000)
          .attr(
            "transform",
            (d) => `translate(${order.indexOf(d.id) * 120 + 60},${d.y})`
          );
      }
    });
  }, [graph, order]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default DijkstraVisualization;
