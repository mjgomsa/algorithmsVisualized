import React, { useState } from "react";
// import BarChart from "./js/BarChart";
import ShortestPathVisualization from "./js/ShortestPathVisualization";
import DijkstraVisualization from "./js/DijkstraVisualization";
import "./App.css";
import fibonacci from "./assets/images/fibonacci.png";

// const data = [
//   { year: 1980, efficiency: 24.3, sales: 8949000 },
//   { year: 1985, efficiency: 27.6, sales: 10979000 },
//   { year: 1990, efficiency: 28, sales: 9303000 },
//   { year: 1991, efficiency: 28.4, sales: 8185000 },
//   { year: 1992, efficiency: 27.9, sales: 8213000 },
//   { year: 1993, efficiency: 28.4, sales: 8518000 },
//   { year: 1994, efficiency: 28.3, sales: 8991000 },
//   { year: 1995, efficiency: 28.6, sales: 8620000 },
//   { year: 1996, efficiency: 28.5, sales: 8479000 },
//   { year: 1997, efficiency: 28.7, sales: 8217000 },
//   { year: 1998, efficiency: 28.8, sales: 8085000 },
//   { year: 1999, efficiency: 28.3, sales: 8638000 },
//   { year: 2000, efficiency: 28.5, sales: 8778000 },
//   { year: 2001, efficiency: 28.8, sales: 8352000 },
//   { year: 2002, efficiency: 29, sales: 8042000 },
//   { year: 2003, efficiency: 29.5, sales: 7556000 },
//   { year: 2004, efficiency: 29.5, sales: 7483000 },
//   { year: 2005, efficiency: 30.3, sales: 7660000 },
//   { year: 2006, efficiency: 30.1, sales: 7762000 },
//   { year: 2007, efficiency: 31.2, sales: 7562000 },
//   { year: 2008, efficiency: 31.5, sales: 6769000 },
//   { year: 2009, efficiency: 32.9, sales: 5402000 },
//   { year: 2010, efficiency: 33.9, sales: 5636000 },
//   { year: 2011, efficiency: 33.1, sales: 6093000 },
//   { year: 2012, efficiency: 35.3, sales: 7245000 },
//   { year: 2013, efficiency: 36.4, sales: 7586000 },
//   { year: 2014, efficiency: 36.5, sales: 7708000 },
//   { year: 2015, efficiency: 37.2, sales: 7517000 },
//   { year: 2016, efficiency: 37.7, sales: 6873000 },
//   { year: 2017, efficiency: 39.4, sales: 6081000 },
// ];

function App() {
  const mapWidth = 1200;
  const mapHeight = 500;
  const [numCities, setNumCities] = useState(200);

  const handleNumCitiesChange = (event) => {
    setNumCities(+event.target.value);
  };

  return (
    <div className="App">
      <div className="Header">
        <h1>Visualizing</h1>
        <h2 id="algorithms"> Algorithms</h2>
        <img className="fibImg" src={fibonacci} alt="fibonacci sequence" />
        <h5 id="introHeader">
          MJ Gomez-Saavedra<br></br>
          Introduction to Data Visualization<br></br>
          Fall 2023
        </h5>
      </div>
      <div className="blankSpace"></div>
      <div className="textContent">
        <p>
          The following is my final project for
          <span>Intro to Data Visualization</span>
          course at Parsons School of Design, taught by Ryan Best. This project
          marks the end of a semester dedicated to honing the art and science of
          data visualization.
        </p>
        <p>
          Throughout the Fall semester, our focus was dedicated to acquiring and
          refining the essential skills required for effective data
          visualization. Guided by Ryan's expertise, we delved into the
          intricate world of transforming raw data into compelling visual
          narratives. This course has been instrumental in equipping us with the
          tools to communicate complex information in a visually engaging
          manner.
        </p>
        <p>
          For my final project, I have chosen to merge my two worlds: computer
          science and design, by visualizing a series of algorithms commonly
          taught in computer science classes. Algorithms, as the fundamental
          building blocks of computational problem-solving, pose a unique visual
          richness that I aim to explore and communicate. This project serves as
          a testament to the intersection of art and technology, where the
          elegance of algorithms converges with the power of visual
          storytelling.
        </p>
        <p>
          Join me on this visual journey as we unravel the intricate patterns,
          structures, and relationships embedded within the algorithms that
          define the digital landscape. Through this project, I aim to bridge
          the gap between abstract computational concepts and accessible,
          aesthetically pleasing visualizations. I invite you to explore the
          symbiosis of data and design, where the beauty of algorithms is
          brought to life through the lens of data visualization
        </p>
        <p>
          The shortest path (TSP) is the most direct route between two points in
          a network, graph, or space, with the aim of minimizing distance, time,
          or some other metric. This concept is widely used in various fields
          such as computer science, graph theory, transportation planning, and
          optimization. There are different algorithms to solve the shortest
          path problem, and the choice of algorithm depends on the specific
          characteristics of the problem and the underlying graph. Some
          well-known algorithms include:
        </p>
      </div>
      <div className="blankSpace-sm"></div>
      <div className="SubHeader">
        <h2>I. Nearest Neighbor</h2>
        <h3 id="subtitleAlign">Algorithm</h3>
      </div>
      <div className="textContent">
        <p>
          The Nearest Neighbor Algorithm is a simple and intuitive heuristic
          approach used for solving optimization problems, particularly in the
          context of finding approximate solutions to the Traveling Salesman
          Problem (TSP). The TSP involves finding the shortest possible route
          that visits a set of cities and returns to the original city.
        </p>
        <p>
          The Nearest Neighbor Algorithm is a greedy algorithm, meaning it makes
          locally optimal choices at each step with the hope of finding a
          globally optimal solution. However, it does not guarantee the absolute
          shortest path and may result in a suboptimal solution. Nevertheless,
          it is computationally less intensive than some exact algorithms for
          the TSP, making it useful for quickly finding good solutions,
          especially in situations where finding an optimal solution is
          impractical. While the Nearest Neighbor Algorithm is relatively
          straightforward, its results can vary depending on the starting city.
          It may produce different solutions for the same set of cities based on
          the initial choice.
        </p>
      </div>
      <div className="Controls">
        <button onClick={() => setNumCities(200)}>Refresh Map</button>
        <div>
          <label>Number of Nodes:</label>
          <input
            className="slider"
            type="range"
            min="5"
            max="500"
            value={numCities}
            onChange={(e) => setNumCities(+e.target.value)}
          />
          <label>{numCities}</label>
        </div>
        <br></br>
      </div>
      <ShortestPathVisualization
        key={numCities}
        width={mapWidth}
        height={mapHeight}
        numCities={numCities}
      />
      <div className="blankSpace-sm"></div>
      <div className="SubHeader">
        <h2>II. Dijkstra's</h2>
        <h3 id="subtitleAlign">Algorithm</h3>
      </div>
      <div className="textContent">
        <p>
          Dijkstra's Algorithm is a popular algorithm used to find the shortest
          path between nodes in a weighted, directed graph. The algorithm was
          conceived by computer scientist Edsger Dijkstra and is commonly
          employed in various applications, such as network routing protocols
          and pathfinding in maps or graphs.
        </p>
        <p>
          Starting from a chosen source node, the algorithm systematically
          explores neighboring nodes, updating the tentative distances from the
          source as it progresses. It maintains a priority queue to efficiently
          select nodes with the smallest tentative distances at each step. The
          algorithm iterates until all nodes are visited, determining the
          shortest paths from the source to every other node. Dijkstra's
          Algorithm is effective when dealing with non-negative edge weights and
          is widely applied in network routing, pathfinding, and optimization
          scenarios. However, it may not provide accurate results in graphs with
          negative edge weights. The algorithm's efficiency is attributed to its
          ability to prioritize nodes based on their tentative distances,
          ensuring a systematic exploration of the graph and the determination
          of optimal paths.
        </p>
      </div>
      <DijkstraVisualization />
    </div>
  );
}

export default App;
