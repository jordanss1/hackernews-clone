import React from "react";

const PlaceHolderMain = ({ visibilityRef }) => {
  return (
    <div className="ui segment loading-p">
      <div className="ui active inverted dimmer">
        <div className="ui large text loader">Loading</div>
      </div>
      <p></p>
      <p></p>
      <p ref={visibilityRef}></p>
    </div>
  );
};

export default PlaceHolderMain;
