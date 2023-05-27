import React from "react";
import FooterExtraLinksWrapper from "./FooterExtraLinksWrapper";

const FooterExtraLinks = () => {
  const extraLinks = [
    {
      header: "Company",
      links: ["About THN", "Advertise with us", "Contact"],
    },
    {
      header: "Pages",
      links: ["Webinars", "Deals Store", "Privacy Policy"],
    },
    {
      header: "Deals",
      links: ["Hacking", "Development", "Android"],
    },
  ];

  return (
    <div className="footer-extra">
      {extraLinks.map((linkObject, i) => (
        <FooterExtraLinksWrapper key={i} linkObject={linkObject} />
      ))}
    </div>
  );
};

export default FooterExtraLinks;
