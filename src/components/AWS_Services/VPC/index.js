import React, { useEffect, useRef, useState } from 'react';
import { Rect, Group, Transformer } from 'react-konva';
import { Html } from 'react-konva-utils'
import Icon from 'react-aws-icons/dist/aws/compute/VPC';

import './style.css';

const VPC = ({ node, onDragEnd }) => {
  const [enableResize, setEnableResize] = useState(false);
  const shapeRef = useRef();
  const transformerRef = useRef();

  useEffect(() => {
    if (enableResize) {
      transformerRef.current.nodes([shapeRef.current])
      transformerRef.current.getLayer().batchDraw();
    }

  }, [enableResize])
  return (
    <>
      <Group
        ref={shapeRef}
        draggable={true}
        onTransformEnd={(e) => {
          console.log('Transformed', e)
        }}
        onDragEnd={onDragEnd}
        onClick={() => {
          setEnableResize(true);
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
            <div
              className='vpc-icon-container'
              onClick={() => {
                alert('Clicked');
              }}>
              <Icon size={48} />
              <div className='vpc-icon-text'>
                Virtual Private Cloud
              </div>
            </div>
          </Html>
        </Group>
      </Group>
      {enableResize && (
        <Transformer
          ref={transformerRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  )
}

export default VPC;
