import React from "react";

const PlaceHolderMain = () => {
  return (
    <div className="ui segment loading-placeholder">
      <div className="ui active inverted dimmer real-loader">
        <div className="ui large text loader"></div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default PlaceHolderMain;
