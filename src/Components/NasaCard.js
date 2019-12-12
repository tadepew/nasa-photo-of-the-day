import React from "react";
import logo from "../../src/img/nasa.png";
import dateFormat from "dateformat";

var now = new Date();

const NasaCard = props => {
  return (
    <div className="nasa-card">
      <header>
        <img className="logo" src={logo} alt="nasa logo" />
        <h1>{props.title}</h1>
        <h2>{dateFormat(now, "mmmm dS, yyyy")}</h2>
      </header>
      <div className="card-body">
        <img className="apod-image" alt="Image of the Day" src={props.photo} />
        <p>{props.explanation}</p>
      </div>
    </div>
  );
};

export default NasaCard;
