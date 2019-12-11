import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import { isTemplateElement } from "@babel/types";

export default function NasaGrid() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=QKeamOl8DOZJtVx7pQXD0OLiIpfIJS3y14kh7o17`
      )
      .then(response => {
        console.log(response.data);
        setNasaData(response.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="entry">
        {/* {Object.keys(nasaData).map((item, index) => {
          return <NasaCard key={index} img={item.hdurl} date={item.date} />;
        })} */}
        <NasaCard
          photo={nasaData.hdurl}
          title={nasaData.title}
          date={nasaData.date}
          explanation={nasaData.explanation}
        />
      </div>
    </div>
  );
}
