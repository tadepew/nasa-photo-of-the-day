import React from "react";

const NasaCard = props => {
  return (
    <div className="nasa-card">
      <header>
        <img src="src/img/nasa.png" alt="nasa logo" />
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
      </header>
      <div className="card-body">
        <img className="apod-image" alt="Image of the Day" src={props.photo} />
        <p>{props.explanation}</p>
      </div>
    </div>
  );
};

export default NasaCard;
