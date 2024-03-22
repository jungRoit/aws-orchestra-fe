import PublicSubnet from "../AWS_Services/PublicSubnet"
import VPC from "../AWS_Services/VPC"

const IconFactory = ({ name }) => {

  switch (name) {
    case 'VPC': {
      return <VPC />
    }
    case 'PublicSubnet': {
      return <PublicSubnet />
    }
    default: {
      return <div>No Icon</div>
    }
  }
}

export default IconFactory;