import React from "react";
import PropsTypes from "prop-types";
import "./Card.css";

const Card = ({lang, img, fcolor, scolor}) => {
  return <div className='card' style={{background: `linear-gradient(to left, ${fcolor}, ${scolor})`}}>

        <img src={img} alt="lang.svg" />
        <h3>{lang}</h3>
        
        </div>;
};

Card.propTypes = {
  lang: PropsTypes.string,
  img: PropsTypes.string,
  fcolor: PropsTypes.string,
  scolor: PropsTypes.string
};

export default Card;
