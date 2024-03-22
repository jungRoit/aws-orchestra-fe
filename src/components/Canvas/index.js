import { Stage, Layer, Line } from 'react-konva';
const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth - 200;

const Canvas = () => {
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


  return (
    <Stage height={HEIGHT} width={WIDTH}>
      <Layer>
        {grid}
      </Layer>
    </Stage>
  )
}

export default Canvas;
