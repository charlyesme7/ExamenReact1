import { Component } from "react";
import '../App.css';
import logo from '../logocine2.png'

class Header extends Component{
    render(){
        return(
            <div className="App-header">
                <img className= "App-logo" alt="App-logo" src={logo}/>
            </div>

            
        );
    }
}

export default Header;