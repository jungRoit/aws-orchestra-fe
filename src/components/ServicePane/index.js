import React from "react";
import './style.css';
import VPC from '../AWS_Services/VPC'
import manifest from '../../manifest';
import IconFactory from "../IconFactory";

const ServicePane = ({ onClick }) => {

  return (
    <div className="container-service_pane">
      <h1>{manifest.title}</h1>
      {manifest.sections.map((section => (
        <div className="section">
          <h2>{section.title}</h2>
          <div className="services">
            {section.services.map((service) => (
              <IconFactory name={service.name} onClick={onClick} />
            ))}
        </div>
      </div>
      )))}
    </div>
  )
}

export default ServicePane;