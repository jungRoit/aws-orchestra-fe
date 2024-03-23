import PrivateSubnet from "../AWS_Services/PrivateSubnet"
import PublicSubnet from "../AWS_Services/PublicSubnet"
import VPC from "../AWS_Services/VPC"

const IconFactory = ({ name, onClick }) => {

  switch (name) {
    case 'VPC': {
      return <VPC onClick={(e) => onClick(e, name)} />
    }
    case 'PublicSubnet': {
      return <PublicSubnet onClick={(e) => onClick(e, name)} />
    }
    case 'PrivateSubnet': {
      return <PrivateSubnet onClick={(e) => onClick(e, name)} />
    }
    default: {
      return <div>No Icon</div>
    }
  }
}

export default IconFactory;