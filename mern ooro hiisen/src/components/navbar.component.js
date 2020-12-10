import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./nav.css";
export default class Navbar extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Мэдээ үзэх</Link>
        </li>
        <li>
          <Link to="/medeeOruulah">Мэдээ оруулах</Link>
        </li>
      </ul>
    );
  }
}
