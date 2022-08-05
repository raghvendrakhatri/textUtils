import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);


  const alertHelper = (message,type)=>
  {
    setAlert({
      msg:message,
      ty:type
    })

    setTimeout(()=>
    {
      setAlert(null)
    },1000)
  }

  const toggleMode = ()=>
  {
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="#3F4E4F";
    alertHelper("Dark mode has been enabled",'success');
    }
    else
    {
    setMode('light')
    document.body.style.backgroundColor="white";
    alertHelper("Light mode has been enabled",'success');
    }
  }

  return (
    <>
    <Navbar mymode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className="container my-5">
      <TextForm heading = "Enter a text to analyze" mymode={mode} alertHelper={alertHelper}></TextForm>
    </div>
    </>
  )
}

export default App
