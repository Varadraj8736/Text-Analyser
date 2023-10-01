// import About from "./About";
import Navbar from "./Navbar";
import React ,{useState}  from 'react'
import TextForm from "./TextForm";
import Alertmsg from "./Alertmsg";
//import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom"

 
function App() {
  const[mode,setMode] = useState('light')
  const toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#0a1244';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
      
    }
  }
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    // <Navbar title = " TextUtils " abouttext = "About" ></Navbar>
    <>
    {/* <Router> */}
    <Navbar mode = {mode} toggleMode = {toggleMode }></Navbar>
    <Alertmsg alert = {alert}></Alertmsg>
    <div className="container my-3">
    
          
    <TextForm showAlert={showAlert} heading = "Enter the text To Analyse" mode = {mode}/>

    </div>

    </>
  );
}

export default App;
