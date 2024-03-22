import VPCIcon from 'react-aws-icons/dist/aws/logo/VPC';

const VPC = ({ onClick }) => {
  return (
    <div onClick={onClick} className='icon'>
      <VPCIcon size={48} />
      <div className='icon-text'>
        VPC
      </div>
    </div>
  )
}

export default VPC;
