import React from "react";
import Tab from "../common/Tab";
import PreApprovalCard from "./PreApprovalCard";

const HomeOwnerShip = () => {
  return (
    <div className="">
      <div className="mainHeading">Homeownership is Closer Than You Think</div>
      <div className="flex  justify-center">
        <Tab
          tabArr={[
            {
              name: "Pre-Approval",
              content: <PreApprovalCard />,
            },
            {
              name: "Home Buying",
              content: <>Home Buying</>,
            },
            {
              name: "Make an offer",
              content: <>Make an offer</>,
            },
          ]}
        ></Tab>
      </div>
    </div>
  );
};

export default HomeOwnerShip;
