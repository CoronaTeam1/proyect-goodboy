import React from "react";

const Section = ({ url, title, event }) => {
  return (
    <div onClick={() => event()}>
      <img src={url} alt={title} />
    </div>
  );
};

export default Section;
