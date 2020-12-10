import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    // this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: "",
      duration: "",
      date: Date(Date.now()),
      // users: [],
    };
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    axios
      .post("http://localhost:5000/inf/medeeOruulah", exercise)
      .then((res) => console.log(res.data));
    // window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Мэдээгээ оруулна уу</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Мэдээний гарчиг</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Тайлбар хэсэг </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Оруулсан өдөр </label>
            <div>{this.state.date}</div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Мэдээг оруулах"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
