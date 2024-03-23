import { Rect, Group } from 'react-konva';
import { Html } from 'react-konva-utils'
import VPC from 'react-aws-icons/dist/aws/compute/VPC';


const VPCNode = () => {
  return (
    <Group
      draggable={true}
      onClick={() => {
        alert('Clicked');
      }}
    >
      <Rect
        x={200}
        y={300}
        width={960}
        height={800}
        stroke={'#F58535'}
        strokeWidth={0.8}
        shadowBlur={10}
      />
      <Group x={216} y={316}>
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
