import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styled from "styled-components";
import { dates } from "../Components/data";
import moment from "moment";

export default function NasaGrid() {
  const [nasaData, setNasaData] = useState([]);
  const [currentDate, setNewDate] = useState(dates[0]);
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${currentDate}&api_key=QKeamOl8DOZJtVx7pQXD0OLiIpfIJS3y14kh7o17`
      )
      .then(response => {
        console.log(response.data);
        setNasaData(response.data);
      });
  }, [currentDate]);

  return (
    <div className="container">
      <div className="entry">
        <NasaCard
          photo={nasaData.hdurl}
          title={nasaData.title}
          date={nasaData.date}
          explanation={nasaData.explanation}
        />
      </div>
      <div className="btn">
        <ButtonDropdown
          isOpen={dropdownOpen}
          toggle={toggle}
          color="primary"
          size="lg"
        >
          <DropdownToggle caret>Pick a date</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setNewDate(dates[0])}>
              Today
            </DropdownItem>
            <DropdownItem onClick={() => setNewDate(dates[1])}>
              Yesterday
            </DropdownItem>
            <DropdownItem onClick={() => setNewDate(dates[2])}>
              {moment(new Date([dates[2]]))
                .add(1, "day")
                .format("MMMM Do, YYYY")}
            </DropdownItem>
            <DropdownItem onClick={() => setNewDate(dates[3])}>
              {moment(new Date([dates[3]]))
                .add(1, "day")
                .format("MMMM Do, YYYY")}
            </DropdownItem>
            <DropdownItem onClick={() => setNewDate(dates[4])}>
              {moment(new Date([dates[4]]))
                .add(1, "day")
                .format("MMMM Do, YYYY")}
            </DropdownItem>
            <DropdownItem onClick={() => setNewDate(dates[5])}>
              {moment(new Date([dates[5]]))
                .add(1, "day")
                .format("MMMM Do, YYYY")}
            </DropdownItem>
            <DropdownItem onClick={() => setNewDate(dates[6])}>
              {moment(new Date([dates[6]]))
                .add(1, "day")
                .format("MMMM Do, YYYY")}
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    </div>
  );
}

// https://api.nasa.gov/planetary/apod?date=date.today.format(yyyy-mm-dd)&api_key=QKeamOl8DOZJtVx7pQXD0OLiIpfIJS3y14kh7o17
