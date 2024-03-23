import VPC from "../AWS_Services/VPC";
import PublicSubnet from "../AWS_Services/PublicSubnet";

const NodeFactory = ({ node, onDragEnd }) => {

  switch (node.name) {
    case 'VPC': {
      return <VPC node={node} onDragEnd={onDragEnd} />
    }
    case 'PublicSubnet': {
      return <PublicSubnet node={node} onDragEnd={onDragEnd} />
    }

    default: return null;
  }

}

export default NodeFactory;
