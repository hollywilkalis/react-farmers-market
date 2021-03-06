import React from "react";
import PropTypes from "prop-types";

function Market(props){
  return (
    <div>
      <h3>{props.day}</h3>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
      <hr/>
    </div>
  );
}

Market.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};


export default Market;
