import React from "react";

const WhiteButton = ({ btnName, onClick, noBoxShadow = false }) => {
  return (
    <div className={`whiteBtnWrapper ${noBoxShadow ? "" : "withBoxShadow"}`}>
      <button type="button" onClick={onClick} className="whiteBtn">
        {btnName}
      </button>
    </div>
  );
};

export default WhiteButton;
