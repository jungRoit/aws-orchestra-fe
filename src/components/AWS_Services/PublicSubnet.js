import Icon from 'react-aws-icons/dist/aws/compute/VPCSubnet';

const PublicSubnet = ({ onClick }) => {
  return (
    <div onClick={onClick} className='icon'>
      <Icon size={48} />
      <div className='icon-text'>
        Public Subnet
      </div>
    </div>
  )
}

export default PublicSubnet;
