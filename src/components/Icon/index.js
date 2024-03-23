import PrivateSubnet from 'react-aws-icons/dist/aws/compute/VPN';
import PublicSubnet from 'react-aws-icons/dist/aws/compute/VPCSubnet';
import VPC from 'react-aws-icons/dist/aws/compute/VPC';

const Icon = ({ name, displayName, onClick }) => {
  let Icon = null;
  switch (name) {
    case 'VPC': {
      Icon = <VPC size={48} />
      break;
    }
    case 'PublicSubnet': {
      Icon = <PublicSubnet size={48} />
      break;
    }
    case 'PrivateSubnet': {
      Icon = <PrivateSubnet size={48} />
      break;
    }
    default: {
      Icon = <div>No Icon</div>
    }
  }

  return (
    <div onClick={(e) => onClick(e, name)} className='icon'>
      {Icon}
      <div className='icon-text'>
        {displayName}
      </div>
    </div>
  )
}

export default Icon;