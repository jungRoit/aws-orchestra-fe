import VPC from "../AWS_Services/VPC";

const NodeFactory = ({ node, onDragEnd }) => {

  switch (node.name) {
    case 'VPC': {
      return <VPC node={node} onDragEnd={onDragEnd} />
    }

    default: return null;
  }

}

export default NodeFactory;