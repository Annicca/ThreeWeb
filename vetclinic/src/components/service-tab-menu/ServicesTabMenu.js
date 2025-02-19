import React from "react";
import TabMenu from "../tab-menu/TabMenu";
import Services from "../services/Services";
import { TABS } from "../../constants/tabs";

function ServicesTabMenu() {
  return (
    <TabMenu tabs={TABS}>
      {(activeTab) => (
        <Services
          key={activeTab.id}
          dataUrl={activeTab.dataUrl}
          defaultTitle={activeTab.title}
        />
      )}
    </TabMenu>
  );
}

export default ServicesTabMenu;
