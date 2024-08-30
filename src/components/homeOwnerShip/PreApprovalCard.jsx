import React from "react";
import WhiteButton from "../common/WhiteButton";

const PreApprovalCard = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="lightBlueBg items-start justify-self-end">
        <img
          src="https://s3-alpha-sig.figma.com/img/eb1c/c9d3/5c7355031f6c72dac1037446e4f4b885?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZ-69gSsKQTef9q7z7gn4yfFn6J63oaUpLvX9yfXUKlDLPvBX~eJgL3nH-oBiZgqJ3YCqMB~zK1kOwvKyO7vJhkj0hb68QLWvCOd1ZoZ0DC6d65Boe3Aw9myLCIds2-9Rc28Z-yY2bx~wz0rNBrJNjZoxx2lvFISlhSOpWOFKQX51JYTyv8O7Ch~xXlSVnG32d5Or5B9KbbQJJ~hbUdw0vGJLBmv6CLQuC~LdbCbarBG1zTKhzTlAC7zoZ886jr3vwOWpNKoGbVFoyL2Zozw6Es4b8dWE0y9GOtW8XFipwoO1gCGqTFqlRXi~k8rNLG6pzXN2zTw3Z8In1EiedBT2w__"
          alt="img"
          height={500}
          width={400}
        />
      </div>
      <div className="flex flex-col gap-7">
        <WhiteButton btnName={"Getting pre-Approval"} noBoxShadow />
        <div className="mainHeading text-start">
          Accelerate Your Path to Homeownership with Our Preferred Lenders
        </div>
        <div className="note">
          Team up with our trusted lending experts to streamline your down
          payment and expedite your pre-approval, accelerating your path to
          homeownership.
        </div>
      </div>
    </div>
  );
};

export default PreApprovalCard;
