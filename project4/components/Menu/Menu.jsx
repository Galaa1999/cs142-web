import React from 'react';
import './style.css';
import Heada from "../Header/header.jsx";
import { HashRouter, Route, Link } from "react-router-dom";
import Example from "../example/Example";
import States from "../states/States";



class Menu extends React.Component {

  render() {
    return (
      
      <div className={"menu"}>
        ""sDF'ASDFASFDASDFASDF ASDFASDF AS
          {console.log("sdfsdfasdfads")}
        {/* {console.log("sdfsdfasdfads")}
        <Heada />
       <ul>
           <li><Link to="/#states">States</Link></li>
           <li><Link to="/#exapmle">Example</Link></li>
      </ul>
        <HashRouter>
				<Route path="/#states" component={States} />    
			  	<Route path="/#example" component={Example} />
		</HashRouter> */}
      </div>
    );
  }
}

export default Menu;
