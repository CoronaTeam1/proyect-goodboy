import React from "react";

const Section = ({ url, title, event }) => {
  return (
    
      <img src={url} alt={title} onClick={() => event && event()}/>
    
  );
};

export default Section;
