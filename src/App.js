// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import React,{useState} from 'react'


import {
  BrowserRouter as Router,
  Switch ,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState("light")
  const [t,setT] = useState("Dark Mode")
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type)=>{
    
      setAlert({
        msg:message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
        setMode('dark');
        setT('Light Mode')
        console.log(t);
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode is set","success")
        document.title="TextUtils Dark Mode"
        // document.body.style.color = 'white';
    }
    else{
        setMode('light');
        setT('Dark Mode')
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode is set","success")
        document.title="TextUtils Light Mode"
        // document.body.style.color = 'black';
    }
  }
  return (
    <>
     {/* <Router> */}
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} t = {t} showAlert = {showAlert}/>
      <Alerts alert = {alert}/>  
      
      <div className="container my-3">  
      {/* <Switch> */}
        {/* <Route path="/about"> */}
            {/* <About /> */}
        {/* </Route> */}
        {/* <Route path="/"> */}
          <TextForm heading="Enter the text to analyse" mode={mode} showAlert = {showAlert}/>  
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    
      

      
      
      
      
      
    </>
  );
}

export default App;
