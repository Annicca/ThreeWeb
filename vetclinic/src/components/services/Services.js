import React, { useState } from "react";
import "./Services.css";
import ServiceCategory from "../service-category/ServiceCategory";
import useFetchData from "../../hooks/useFetchData";

function Services({ dataUrl, defaultTitle }) {
  const { data: servicesData, isLoading, error } = useFetchData(dataUrl);
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (key) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (isLoading) {
    return <div className="loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  if (!servicesData) {
    return null;
  }

  return (
    <div className="services">
      <h2 className="section-title">{servicesData.title || defaultTitle}</h2>
      <div className="services-list">
        {Object.entries(servicesData.categories).map(([key, category]) => (
          <div key={key}>
            <button
              className="category-toggle"
              onClick={() => toggleCategory(key)}
            >
              {category.section}
              <span
                className={`arrow ${
                  expandedCategories[key] ? "down" : "right"
                }`}
              ></span>
            </button>
            {expandedCategories[key] && <ServiceCategory category={category} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
