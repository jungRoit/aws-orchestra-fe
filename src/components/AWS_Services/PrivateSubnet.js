import Icon from 'react-aws-icons/dist/aws/compute/VPN';

const PrivateSubnet = ({ onClick }) => {
  return (
    <div onClick={onClick} className='icon'>
      <Icon size={48} />
      <div className='icon-text'>
        Private Subnet
      </div>
    </div>
  )
}

export default PrivateSubnet;
