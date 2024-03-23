import Icon from '../Icon';

const ServiceIcon = ({ name, displayName, onClick }) => {

  return (
    <div onClick={(e) => onClick(e, name, displayName)} className='icon'>
      <Icon name={name} />
      <div className='icon-text'>
        {displayName}
      </div>
    </div>
  )
}

export default ServiceIcon;