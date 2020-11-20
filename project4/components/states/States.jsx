import React from 'react';
import './States.css';
import Heada from "../Header/header.jsx";


/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state={

      val:[],
      value:'',

    }
   
  
  }
  componentDidMount(){
       this.GetArr();
  }

  GetArr = (value)=>{
    var Arr = [];
    cs142models.statesModel().filter((e)=>e.includes(value)).map((e)=>{
      Arr.push(e);
    }
   );
   this.setState({val: Arr})

  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.GetArr(event.target.value);
  }
  render() {
    return (
      <div>
        <Heada />
        Find state: <input type="text" value={this.state.value} ng-model="subString" onChange={this.handleChange} ></input>
        <ul>
            {
              this.state.val.map((e)=>{
                return (<li>{e}</li>);
              })
            }
        </ul>
      </div>
    );
  }
}

export default States;
