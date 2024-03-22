import React from "react";
import './style.css';
import VPC from '../AWS_Services/VPC'

const ServicePane = () => {

  const handleOnClick = (e) => {

  }

  return (
    <div className="container-service_pane">
      <h1>AWS Services</h1>

      <div className="section">
        <h2>Containers</h2>
        <div>
          <VPC onClick={handleOnClick} />
        </div>
      </div>

    </div>
  )
}

export default ServicePane;