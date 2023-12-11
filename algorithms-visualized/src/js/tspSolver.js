// tspSolver.js
export function solveTSP(cities) {
  const numCities = cities.length;
  const distances = [];

  // Calculate distances between each pair of cities
  for (let i = 0; i < numCities; i++) {
    distances[i] = [];
    for (let j = 0; j < numCities; j++) {
      distances[i][j] = Math.sqrt(
        (cities[i].x - cities[j].x) ** 2 + (cities[i].y - cities[j].y) ** 2
      );
    }
  }

  // Nearest Neighbor Algorithm
  const visited = Array(numCities).fill(false);
  const path = [0]; // Start from the first city
  visited[0] = true;

  for (let i = 1; i < numCities; i++) {
    let currentCity = path[path.length - 1];
    let minDistance = Infinity;
    let nextCity = -1;

    for (let j = 0; j < numCities; j++) {
      if (!visited[j] && distances[currentCity][j] < minDistance) {
        minDistance = distances[currentCity][j];
        nextCity = j;
      }
    }

    path.push(nextCity);
    visited[nextCity] = true;
  }

  return path;
}
