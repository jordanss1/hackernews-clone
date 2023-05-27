import React from "react";

const FooterExtraLinksWrapper = ({ linkObject }) => {
  const header = linkObject.header;
  return (
    <div className="d-flex flex-column">
      <span className="fw-bold">{header}</span>
      {linkObject.links.map((link) => (
        <span className="">{link}</span>
      ))}
    </div>
  );
};

export default FooterExtraLinksWrapper;
