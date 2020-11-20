import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';
import axios from 'axios';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    page:"",
    name:"",
    listItems123: [],
  }

      
    
  }


  render() {
    var name;
    var page;
    
    if(window.location.href.slice(40, 45) === "users"){
      //name = window.cs142models.userModel(window.location.href.slice(46, 70)).first_name;


      
      axios.get('http://localhost:3000/user/'+window.location.href.slice(46, 70))
      .then((response) => {
        this.setState({listItems123: response.data[0]})
      })
     .catch((error)=>{
        console.log(error);
     });



      name = this.state.listItems123.first_name;


      page ="User detail of ";
    }else if(window.location.href.slice(40, 45) === "photo"){
      //name = window.cs142models.userModel(window.location.href.slice(47, 71)).first_name;

      axios.get('http://localhost:3000/user/'+window.location.href.slice(47, 71))
      .then((response) => {
        this.setState({listItems123: response.data[0]})
      })
     .catch((error)=>{
        console.log(error);
     });

     

    name = this.state.listItems123.first_name;


      page ="Photos of  ";
    }else{
      page = "User list "
      name = "";
    }
    

    return (
      <AppBar className="cs142-topbar-appBar" position="relative" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
              Galtaa
          </Typography>
          <Typography variant="h6" color="inherit">
          <h5>{page + " " + name}</h5>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
