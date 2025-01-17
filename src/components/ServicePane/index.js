import React from "react";
import './style.css';
import manifest from '../../manifest';
import ServiceIcon from "../ServiceIcon";

const ServicePane = ({ onClick }) => {

  return (
    <div className="container-service_pane">
      <h1>{manifest.title}</h1>
      {manifest.sections.map((section => (
        <div className="section">
          <h2>{section.title}</h2>
          <div className="services">
            {section.services.map((service) => (
              <ServiceIcon
                name={service.name}
                displayName={service.displayName}
                onClick={onClick}
              />
            ))}
          </div>
        </div>
      )))}
    </div>
  )
}

export default ServicePane;