import React from "react";

const Section = ({ url, title, event }) => {
  return (
    
      <img src={url} alt='hola' onClick={() => event()}/>
    
  );
};

export default Section;
