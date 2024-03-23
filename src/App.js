import React, { useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import ServicePane from './components/ServicePane';
import './App.css';
import VPCNode from './components/Canvas/VPCNode';
import NodeFactory from './components/NodeFactory';

const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth - 320;

const App = () => {
  const [nodes, setNodes] = useState([]);
  const grid = [];
  const gridSize = 30;

  for (let i = 0; i < WIDTH / gridSize; i++) {
    grid.push(
      <Line
        key={`line-h-${i}`}
        points={[i * gridSize, 0, i * gridSize, WIDTH]}
        stroke={'#ccc'}
        strokeWidth={0.5}
      />
    )

    grid.push(
      <Line
        key={`line-w-${i}`}
        points={[0, i * gridSize, WIDTH, i * gridSize]}
        stroke={'#ccc'}
        strokeWidth={0.5}
      />
    )
  }

  const handleServiceClick = (e, name) => {
    // nodes.push({ name: name });
    setNodes([{ name: name }]);
  }
  console.log('NODES', nodes);
  return (
    <div className='container-app'>
      <ServicePane onClick={handleServiceClick} />
      <Stage height={HEIGHT} width={WIDTH}>
        <Layer>
          {grid}
          {nodes.map(node => (
            <NodeFactory name={node.name} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
