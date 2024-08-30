// tabArr => [{name:"",content:Element}]

import { useState } from "react";

const Tab = ({ tabArr }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="w-full">
      <div className={`gap-5 cursor-pointer grid grid-cols-${tabArr?.length}`}>
        {tabArr.map((tab, i) => (
          <div
            className={`tab-${tab.name}-${i}`}
            onClick={() => setSelectedTab(i)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tabData p-14">{tabArr[selectedTab].content}</div>
    </div>
  );
};

export default Tab;
