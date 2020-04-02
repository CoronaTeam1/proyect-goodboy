import React from "react";

const Section = ({ url, title }) => {
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  );
};

export default Section;
