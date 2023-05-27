import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import logoPC from '../assets/logo.png'
import '../css/login.css'
import TextField from '@mui/material/TextField'
import { useNavigate } from "react-router-dom";

import axios from 'axios'


function Login() {

  const [error, setError] = useState(0);
  
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [utente, setUtente] = useState([])

  const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
});

  const handleClick = async e => {
    e.preventDefault()
      await axios.get("https://protezione-civile-server.onrender.com/accessoTenda")
        .then(
            (res)=>{res.data[user]==password?navigate("./segnalazione"):setError(1)}
        );
  }

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  }

  const handleChangePw = (event) => {
    setPassword(event.target.value);
  }

  const navigate = useNavigate()

  return (

    <div style={{background: "white", height: "100vh", width: "100vw"}} className="Login">

      <div className="contImmagine">
        <img className="logoPC" src={logoPC}/>
      </div>

      <fieldset className = "form">
        <legend>Login</legend>
        <input className="input" type="text" name='user' placeholder='username' onChange={handleChangeUser}/>
        <input className="input" type="password" name='password' placeholder='password' onChange={handleChangePw}/>
      </fieldset>

      <div>
        <form>
          <button type="submit" onClick={handleClick} className='bottone-login'>
            ACCEDI
          </button>  
        </form> 
      </div>

      {error?<div className="error">Nome Utente o Password errati</div>:null}

    </div>

  )
}

export default Login
