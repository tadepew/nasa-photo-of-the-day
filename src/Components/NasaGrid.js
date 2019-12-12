import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaGrid() {
  const [nasaData, setNasaData] = useState([]);
  // const [newDate, setNewDate] = useState([]);

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
      {/* <button onClick={() => setNewDate("Yesterday")}></button> */}
      <div className="entry">
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
