import React from "react";
import "./ServiceCategory.css";
import ServiceItem from "../service-item/ServiceItem";

function ServiceCategory({ category }) {
  return (
    <div className="service-category">
      <div className="service-list">
        {category.items.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServiceCategory;
