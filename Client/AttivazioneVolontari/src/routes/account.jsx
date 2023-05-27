import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from "./navbar"
import Titolo from "./titolo"

import "../css/account.css"

import img_home from "../assets/home.png"
import img_attivazione from "../assets/attivazione.png"
import img_group from "../assets/gruppo-colorato.png"

function Account(){
  return(
    <div className="home">
      <div className="titolo">
        <Titolo nomePagina="Account"/>
      </div>
      <div className="error">WORK IN PROGRESS...</div>
      <div className="bottom-navbar">
        <NavBar home={img_home} attivazione={img_attivazione} account={img_group}/>
      </div>
    </div>
  )
  
  

}

export default Account