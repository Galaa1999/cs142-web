import React, { Component } from "react";
import { Link } from "react-router-dom";
import css from "./style.css";
import image from "./s.jpg";
function Card(props) {
  return (
    <div className="card">
      <img src={image} alt="Logo" />;
      <div className="container">
        <p>Мэдээлэл </p>
        <h4>
          <b>{props.props.username}</b>
        </h4>
        <p>{props.props.description}</p>
        <p>Мэдээлэл оруулсан өдөр</p>
        <div>{props.props.date}</div>
      </div>
    </div>
  );
}
export default Card;
