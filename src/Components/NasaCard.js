import React from "react";
import logo from "../../src/img/nasa.png";
import dateFormat from "dateformat";
import {
  CardBody,
  Logo,
  Header,
  Apod,
  Description,
  Top,
  Title,
  Today
} from "../Styles";
import { dates } from "./data";
import moment from "moment";

const NasaCard = props => {
  return (
    <CardBody>
      <Header>
        <Top>
          <Logo src={logo} alt="nasa logo" />
          <h1>NASA Photo of the Day</h1>
          <Logo src={logo} alt="nasa logo" />
        </Top>
        <Today>
          {moment(new Date(props.date))
            .add(1, "day")
            .format("MMMM Do, YYYY")}
        </Today>
        <Title>{props.title}</Title>
      </Header>
      <div className="card-body">
        <Apod alt="Image of the Day" src={props.photo} />
        <Description>{props.explanation}</Description>
      </div>
    </CardBody>
  );
};

export default NasaCard;
