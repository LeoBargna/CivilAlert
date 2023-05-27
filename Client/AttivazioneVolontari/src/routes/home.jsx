import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from "./navbar"
import Titolo from "./titolo"

import "../css/home.css"

import img_home from "../assets/home-colorato.png"
import img_attivazione from "../assets/attivazione.png"
import img_group from "../assets/gruppo.png"

function Home(){
  return(
    <div className="home">
      <div className="titolo">
        <Titolo nomePagina="Home"/>
      </div>
      <div className="error">WORK IN PROGRESS...</div>
      <div className="bottom-navbar">
        <NavBar home={img_home} attivazione={img_attivazione} account={img_group}/>
      </div>
    </div>
  )
  
  

}

export default Home