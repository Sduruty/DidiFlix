import React from "react";

const Section = props => {
  const tab = [];

  for (let i = 0; i < props.images.length; i++) {
    tab.push(<img src={props.images[i]} alt="Netflix movies" />);
  }

  return (
    <><div className="section">
      <p className="title">{props.category}</p>

      <div className="container">{tab}</div>
    </div>
    
    </>
  );
};

export default Section;
