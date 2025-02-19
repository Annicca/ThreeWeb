import React, { useState } from "react";
import "./TabMenu.css";

function TabMenu({ tabs, children }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="tab-menu">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.imageUrl && (
              <img src={tab.imageUrl} alt={tab.title} className="tab-image" />
            )}
            <div className="tab-title">{tab.title}</div>
          </button>
        ))}
      </div>
      <div className="tab-content">{children(activeTabData)}</div>
    </div>
  );
}

export default TabMenu;
