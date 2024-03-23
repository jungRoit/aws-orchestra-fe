import PrivateSubnet from 'react-aws-icons/dist/aws/compute/VPN';
import PublicSubnet from 'react-aws-icons/dist/aws/compute/VPCSubnet';
import VPC from 'react-aws-icons/dist/aws/compute/VPC';
import EC2 from 'react-aws-icons/dist/aws/logo/EC2';
import ECS from 'react-aws-icons/dist/aws/logo/ECS';
import Lambda from 'react-aws-icons/dist/aws/iot/LambdaFunction';
import StepFunctions from 'react-aws-icons/dist/aws/logo/StepFunctions';
import S3 from 'react-aws-icons/dist/aws/logo/S3';
import RDS from 'react-aws-icons/dist/aws/logo/RDS';
import ElastiCache from 'react-aws-icons/dist/aws/logo/ElasticCache';
import DynamoDB from 'react-aws-icons/dist/aws/logo/DynamoDB';
import Route53 from 'react-aws-icons/dist/aws/logo/Route53';
import APIGW from 'react-aws-icons/dist/aws/logo/APIGateway';
import ELB from 'react-aws-icons/dist/aws/logo/ELB';
import NATGateway from 'react-aws-icons/dist/aws/compute/NATGateway';


const Icon = ({ name, displayName, onClick }) => {
  let Icon = null;
  switch (name) {
    case 'VPC': {
      Icon = <VPC size={48} />
      break;
    }
    case 'EC2': {
      Icon = <EC2 size={48} />
      break;
    }
    case 'ECS': {
      Icon = <ECS size={48} />
      break;
    }
    case 'Route53': {
      Icon = <Route53 size={48} />
      break;
    }
    case 'APIGW': {
      Icon = <APIGW size={48} />
      break;
    }
    case 'ELB': {
      Icon = <ELB size={48} />
      break;
    }
    case 'NATGateway': {
      Icon = <NATGateway size={48} />
      break;
    }
    case 'Lambda': {
      Icon = <Lambda size={48} />
      break;
    }
    case 'StepFunctions': {
      Icon = <StepFunctions size={48} />
      break;
    }
    case 'S3': {
      Icon = <S3 size={48} />
      break;
    }
    case 'RDS': {
      Icon = <RDS size={48} />
      break;
    }
    case 'ElastiCache': {
      Icon = <ElastiCache size={48} />
      break;
    }
    case 'DynamoDB': {
      Icon = <DynamoDB size={48} />
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