import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import logoPC from '../assets/logo.png'
import '../css/login.css'
import TextField from '@mui/material/TextField'
import { useNavigate } from "react-router-dom";
import MD5 from 'crypto-js/md5'
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
      /*await axios.get("https://protezione-civile-server.onrender.com/accessoTenda")
        .then(
            (res)=>{res.data[user]==password?navigate("./segnalazione"):setError(1)}
        );*/
      await axios.get("https://protezione-civile-server.onrender.com/accessoTenda")
        .then(
            (res)=>{
                // res.data[user]==MD5(pw)?navigate("../show?user="+user):setError(1)
                if(
                    MD5(password).words[0] == res.data[user].words[0]&&
                    MD5(password).words[1] == res.data[user].words[1]&&
                    MD5(password).words[2] == res.data[user].words[2]&&
                    MD5(password).words[3] == res.data[user].words[3]
                )
                {
                    navigate("./attivazione")
                }
                else
                {
                  setError(1)
                }
            }
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
