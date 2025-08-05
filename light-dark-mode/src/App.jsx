import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { appContext } from './context/appContext'
import Swticher from './Component/Switcher'

function App() {
  const {light,setLight}=appContext();
  const toogle= ()=>{
    
  }

  return (
  <div className="main">
    this is theme Swticher

    <Swticher/>
    
  </div>
 
  )
}

export default App
