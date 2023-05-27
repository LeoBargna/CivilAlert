import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "../css/navbar.css"

function NavBar (props)
{
  return(
    <div className="navbar">
     <Link to={'/home'}><img src={props.home} className="home"/></Link>
     <Link to={'/attivazione'}><img src={props.attivazione} className="attivazione"/></Link>
     <Link to={'/account'}><img src={props.account} className="account"/></Link>
    </div> 
  )
}

export default NavBar