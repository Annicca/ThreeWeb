import React from "react";
import "./ServiceItem.css";

function ServiceItem({ service }) {
  return (
    <div className="service-item">
      <div className="service-name">{service.serviceName}</div>
      <div className="service-unit">{service.unit}</div>
      <div className="service-price">{service.price} ₽</div>
    </div>
  );
}

export default ServiceItem;
