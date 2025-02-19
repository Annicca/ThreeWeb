import React from "react";
import "./Service.css";
import useFetchData from "../../hooks/useFetchData";

function Service({ dataUrl, defaultTitle }) {
  const { data: serviceData, isLoading, error } = useFetchData(dataUrl);

  if (isLoading) {
    return <div className="loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  if (!serviceData) {
    return null;
  }

  return (
    <div className="service">
      <h2 className="section-title">{serviceData.title || defaultTitle}</h2>
      <div className="service-list">
        {serviceData.items.map((item, index) => (
          <div key={index} className="service-item">
            <div className="service-name">{item.name}</div>
            <div className="service-description">{item.description}</div>
            <div className="service-price">{item.price} ₽</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
