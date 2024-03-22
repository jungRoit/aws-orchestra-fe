import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import Canvas from './components/Canvas';
import ServicePane from './components/ServicePane';
import './App.css';

const App = () => {

  return (
    <div className='container-app'>
      <ServicePane />
      <Canvas>
        <Text text="Some text on canvas" fontSize={15} />
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill="red"
          shadowBlur={10}
        />
        <Circle x={200} y={100} radius={50} fill="green" />
        <Line
          x={20}
          y={200}
          points={[0, 0, 100, 0, 100, 100]}
          tension={0.5}
          closed
          stroke="black"
          fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
        />
      </Canvas>
    </div>
  );
}

export default App;
