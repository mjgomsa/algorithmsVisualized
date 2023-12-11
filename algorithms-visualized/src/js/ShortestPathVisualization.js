// Map.js
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { generateRandomCities } from "./utils";
import { solveTSP } from "./tspSolver";

const ShortestPathVisualization = ({ width, height, numCities }) => {
  const [cities, setCities] = useState(
    generateRandomCities(numCities, width, height)
  );
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove(); // Clear existing elements

    svg
      .selectAll("circle")
      .data(cities)
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 5) // Adjust radius based on position
      .style("fill", (d, i) => (i === 0 ? "black" : "transparent")) // Set color based on position
      .style("stroke", "black");

    // Get TSP
    const optimalPath = solveTSP(cities);

    // Draw TSP path
    svg
      .append("path")
      .datum(
        optimalPath.map((cityId) => cities.find((city) => city.id === cityId))
      )
      .attr(
        "d",
        d3
          .line()
          .x((d) => d.x)
          .y((d) => d.y)
      )
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("fill", "none");
  }, [width, height, numCities, cities]);

  useEffect(() => {
    setCities(generateRandomCities(numCities, width, height));
  }, [numCities, width, height]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default ShortestPathVisualization;
