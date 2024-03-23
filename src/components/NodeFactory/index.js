import VPCNode from "../Canvas/VPCNode";

const NodeFactory = ({ name }) => {

  switch (name) {
    case 'VPC': {
      return <VPCNode />
    }

    default: return null;
  }

}

export default NodeFactory;