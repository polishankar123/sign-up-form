import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { useState } from 'react';
const App = () => {
  const [data, setData]=useState({
    username: '',
    email: '',
    password: '',
    conformPassword: '',
  })

  const {username, email, password,conformPassword} = data;

  const changeHandler= (e) =>{
   setData({...data,[e.target.name]:[e.target.value]});
  }
  const submitHandler = (e) =>{
   e.prventDefaulter();
   if(password===conformPassword){
     console.log(data);
   }else{
     console.log("password and conform password not matched")
   }
  }
  const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '220px',
    display: 'block'
  };
  const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
  };
  
  const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
  };
  return(
    <div>
    <Header />
    <form style={formStyle} onSubmit={submitHandler}>
    <input type="text" name="username" placeholder="UserName" value={username} style={inputStyle} onChange={changeHandler}/><br/>
    <input type="email" name="eamil" placeholder="Email" value={email} style={inputStyle} onChange={changeHandler}/><br />
    <input type="password" name="password" placeholder="Password" value={password} style={inputStyle} onChange={changeHandler}/><br />
    <input type="password" name="conformPassword" placeholder="Conform Password" value={conformPassword} style={inputStyle} onChange={changeHandler}/><br />
    <input type="submit" name="submit" style={submitStyle}/>
    </form>
    </div>
  )
}

export default App;
