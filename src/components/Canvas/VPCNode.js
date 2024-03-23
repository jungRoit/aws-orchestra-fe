import { Rect, Group } from 'react-konva';
import { Html } from 'react-konva-utils'
import VPC from 'react-aws-icons/dist/aws/compute/VPC';


const VPCNode = ({ node, onDragEnd }) => {
  return (
    <Group
      draggable={true}
      onDragEnd={onDragEnd}
      onClick={() => {
        alert('Clicked');
      }}
    >
      <Rect
        x={node.position.x}
        y={node.position.y}
        width={node.size.width}
        height={node.size.height}
        stroke={'#F58535'}
        strokeWidth={0.8}
        shadowBlur={10}
      />
      <Group x={node.position.x + 16} y={node.position.y + 16}>
        <Html>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <VPC size={48} />
            <div style={{ fontSize: 12 }}>
              Virtual Private Cloud
            </div>
          </div>
        </Html>
      </Group>
    </Group>
  )
}

export default VPCNode;
