import React, { useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import ServicePane from './components/ServicePane';
import './App.css';
import VPCNode from './components/AWS_Services/VPC';
import NodeFactory from './components/NodeFactory';
import { generateRandomString } from './utils/utils';

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

  const getServiceNodeSie = (name) => {
    switch (name) {
      case 'VPC': return {
        width: 960,
        height: 800
      }
      case 'PublicSubnet': return {
        width: 400,
        height: 640
      }
      default: return {
        width: 200,
        height: 200
      }
    }
  }

  const handleServiceClick = (e, name) => {
    const node = {
      id: generateRandomString(8),
      name: name,
      position: {
        x: 200,
        y: 300
      },
      size: getServiceNodeSie(name)
    }
    setNodes([...nodes, node]);
  }

  const handleNodeDragEnd = (node, e) => {
    console.log('Handle Drag End', node, e);
  }

  return (
    <div className='container-app'>
      <ServicePane onClick={handleServiceClick} />
      <Stage height={HEIGHT} width={WIDTH}>
        <Layer>
          {grid}
          {nodes.map(node => (
            <NodeFactory
              node={node}
              onDragEnd={(e) => {
              handleNodeDragEnd(node, e)
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
