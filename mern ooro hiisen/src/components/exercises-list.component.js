import React, { Component } from "react";

import axios from "axios";
import Card from "./card";
import css from "./style1.css";
// const Exercise = (props) => (
//   <tr>
//     {/* <td>{props.exercise.username}</td> */}
//     <td>{props.exercise.description}</td>
//     <td>{props.exercise.duration}</td>
//     <td>{props.exercise.date.substring(0, 10)}</td>
//   </tr>
// );

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/inf/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      console.log(currentexercise);
      return <Card props={currentexercise} />;
    });
  }

  render() {
    return (
      <div>
        <div className="cards">{this.exerciseList()}</div>
      </div>
    );
  }
}
