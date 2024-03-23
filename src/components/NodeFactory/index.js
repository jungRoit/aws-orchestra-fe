import VPCNode from "../Canvas/VPCNode";

const NodeFactory = ({ node, onDragEnd }) => {

  switch (node.name) {
    case 'VPC': {
      return <VPCNode node={node} onDragEnd={onDragEnd} />
    }

    default: return null;
  }

}

export default NodeFactory;