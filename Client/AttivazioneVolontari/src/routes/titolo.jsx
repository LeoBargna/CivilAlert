import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "../css/titolo.css"

import img_logo from "../assets/logo.png"


function Titolo(props) {
  return(
    <div className="titolo">
      <img src={img_logo} className="logo"/>
      <p className="nomePagina">{props.nomePagina}</p>
    </div>
  )
}

export default Titolo