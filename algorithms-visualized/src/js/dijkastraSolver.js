export function solveDijkstra(graph, startNodeId) {
  const nodes = graph.nodes;
  const links = graph.links;

  // Create a map to store the distance from the start node to each node
  const distance = {};
  // Create a map to store the previous node in the shortest path
  const previous = {};
  // Set up a priority queue for efficient node selection
  const priorityQueue = new PriorityQueue();

  // Initialize distances and add all nodes to the priority queue
  nodes.forEach((node) => {
    distance[node.id] = node.id === startNodeId ? 0 : Infinity;
    priorityQueue.enqueue(node.id, distance[node.id]);
  });

  // Dijkstra's algorithm
  while (!priorityQueue.isEmpty()) {
    const currentId = priorityQueue.dequeue();

    // Get neighbors of the current node
    const neighbors = links
      .filter((link) => link.source === currentId)
      .map((link) => link.target);

    // Update distance to neighbors
    for (const neighborId of neighbors) {
      const newDistance =
        distance[currentId] + getWeight(graph, currentId, neighborId);
      if (newDistance < distance[neighborId]) {
        distance[neighborId] = newDistance;
        previous[neighborId] = currentId;
        priorityQueue.enqueue(neighborId, newDistance);
      }
    }
  }

  // Reconstruct the shortest path
  const path = [];
  let current = startNodeId;
  while (previous[current] !== undefined) {
    path.unshift(current);
    current = previous[current];
  }
  path.unshift(current);

  console.log({ distance, path });
  return { distance, path };
}

// Helper function to get the weight of a link between two nodes
function getWeight(graph, source, target) {
  const link = graph.links.find(
    (link) => link.source === source && link.target === target
  );
  return link ? link.weight : Infinity;
}

// Priority queue implementation
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    this.items.push({ item, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.items.shift().item;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage
// const graph = {
//   nodes: [{ id: "A" }, { id: "B" }, { id: "C" }, { id: "D" }, { id: "E" }],
//   links: [
//     { source: "B", target: "C", weight: 2 },
//     { source: "B", target: "A", weight: 4 },
//     { source: "A", target: "C", weight: 4 },
//     { source: "A", target: "D", weight: 5 },
//     { source: "C", target: "D", weight: 3 },
//     { source: "D", target: "E", weight: 3 },
//   ],
// };

// const startNodeId = "A";
// const result = solveDijkstra(graph, startNodeId);
// console.log(result);
