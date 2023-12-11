// utils.js
export const generateRandomCities = (numCities, width, height) => {
  return Array.from({ length: numCities }, (_, index) => ({
    id: index,
    x: Math.random() * width,
    y: Math.random() * height,
  }));
};

export function generateRandomGraph(nodeCount, linkCount) {
  const graph = {
    nodes: [],
    links: [],
  };

  // Generate nodes
  for (let i = 0; i < nodeCount; i++) {
    graph.nodes.push({ id: String.fromCharCode(65 + i) }); // ASCII code for 'A' is 65
  }

  // Generate links
  for (let i = 0; i < linkCount; i++) {
    const sourceIndex = Math.floor(Math.random() * nodeCount);
    let targetIndex;
    do {
      targetIndex = Math.floor(Math.random() * nodeCount);
    } while (targetIndex === sourceIndex);

    const weight = Math.ceil(Math.random() * 5); // Random weight from 1 to 5

    graph.links.push({
      source: graph.nodes[sourceIndex].id,
      target: graph.nodes[targetIndex].id,
      weight: weight,
    });
  }

  return graph;
}

// Example usage:
// const randomGraph = generateRandomGraph(10, 15);
// console.log(randomGraph);
