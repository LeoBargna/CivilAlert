import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios'

import NavBar from "./navbar"
import Titolo from "./titolo";

import "../css/attivazione.css"

import img_home from "../assets/home.png"
import img_attivazione from "../assets/attivazione-colorato.png"
import img_group from "../assets/gruppo.png"
import img_logo from "../assets/logo.png"
import mappa from "../assets/mappa.png"

function Attivazione(){

  const [indirizzo, setIndirizzo] = useState("")
  const [informazioni, setInformazioni] = useState("")
  const [tipologia, setTipologia] = useState({})
  const [emergenza, setEmergenza] = useState({})

  const handelChangeIndirizzo = (event) => {
    setIndirizzo(event.target.value);
  }

  const handleChangeInformazioni = (event) => {
    setInformazioni(event.target.value);
  }

  const handleChangeTipologia = (event) => {
    setTipologia(event.target.value);
  }

  const handleChangeEmergenza = (event) => {
    setEmergenza(event.target.value);
  }

  const handleSubmit = async (event) => {

    // Database
    /*try{
      const res = await axios.post("http://localhost:8800/evento/"+indirizzo+"/"+tipologia+"/"+emergenza+"/"+informazioni)
      console.log(res.data[0])
      if(res.data.length > 0)
        navigate("/home?id="+res.data[0].IdVolontarioPk); 
      else  
      {
        console.log(error)
      }
    }
    catch(err){
      console.log(err)
    }*/



    // Telegram

    event.preventDefault();
    const testo = "❗️ ATTENZIONE, SEGNALAZIONE IN ARRIVO   %0A📍 Punto di ritrovo: " + indirizzo + "%0A 🌋 Tipologia evento: " + tipologia + "%0A🚨 Gravità: P" + emergenza + "%0Aℹ️ Informazioni aggiuntive: " + informazioni + "%0A👉🏻 [Premi per rispondere](https://localhost:5174/?ind="+indirizzo+"&tip="+tipologia+"&eme="+emergenza+")";
  
    const token = "6169294690:AAEZ572QSuEal9kUq0dmXtz9wRlRqycbFv8";
    const canale = "@SegnalazioniPC";
    const parse = "Markdown";
    var url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + canale + "&text=" + testo + "&parse_mode="+ parse;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    console.log("messaggio inviato");
    console.log(indirizzo, informazioni, emergenza, tipologia)

  }

  return(

    <div className="attivazione">

      <div className="titolo">
        <Titolo nomePagina={"Segnalazione"} />
      </div>

      <div className="info">
        <form onSubmit={handleSubmit}>
          <input className="input" type="text" name='indirizzo' 
            value={indirizzo || ""} onChange={handelChangeIndirizzo} 
            placeholder='Inserisci indirizzo...'/>
          <input className="input" type="text" name='info' 
            value={informazioni || ""} onChange={handleChangeInformazioni} 
            placeholder='Informazioni aggiuntive...'/>
          <legend className="legenda">Gravità:</legend>
          <label className="container">P1 - basso
            <input type="checkbox" value="1" onChange={handleChangeEmergenza}/>
            <span className="checkmark"></span>
          </label>
          <label className="container">P2 - medio basso
            <input type="checkbox" value="2" onChange={handleChangeEmergenza}/>
            <span className="checkmark"></span>
          </label>
          <label className="container">P3 - medio alto
            <input type="checkbox" value="3" onChange={handleChangeEmergenza}/>
            <span className="checkmark"></span>
          </label>
          <label className="container">P4 - alto
            <input type="checkbox" value="4" onChange={handleChangeEmergenza}/>
            <span className="checkmark"></span>
          </label>
          <div className="container-legend">
            <legend align="left" className="legenda">Tipologia:</legend>
          </div>
          <div className="container">
            <div className="container-select">
              <select value={tipologia} onChange={handleChangeTipologia} name="tipologia">
                <option></option>
                <option value="sisma">Sisma</option>
                <option value="alluvione">Alluvione</option>
                <option value="maremoto">Maremoto</option>
                <option value="incendio">Incendio</option>
                <option value="sanitaria">Emergenza Sanitaria</option>
                <option value="chimico">Rischio Chimico</option>
              </select>
            </div>
          </div>
          <input type="submit" className="bottone" value="INVIA SEGNALAZIONE" />
        </form>
      </div>

      <div className="bottom-navbar">
        <NavBar home={img_home} attivazione={img_attivazione} account={img_group}/>
      </div>
    </div>
  )
}

export default Attivazione

