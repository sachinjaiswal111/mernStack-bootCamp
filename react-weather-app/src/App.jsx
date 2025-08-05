import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [city,setCity]=useState('');
  const [data,setData]=useState({});
  const[view,setView]=useState(false);
  
  const handleClick= async()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b0477b2906f4a167b7877c5d3bf7bb2f`;
    const res= await fetch(url);
    const data= await res.json();
    setData(data);
    setView(true);
    
  }
  // const kToc= (temp)=>{

  // }

  return (
    <>
    <div className="main">
       <h1>Weather App</h1>
       <input type="text" id='cityInput' placeholder='Enter you city name' value={city} onChange={(e)=>setCity(e.target.value)} />
       <button onClick={handleClick}>Get weather</button>
       {view && 
          <div>
            <h2>{data.name}, {data.sys.country}</h2>
          <p><strong>{data.main.temp}°C</strong></p>
          <p>{data.weather[0].main} - {data.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
          </div>
       }
       
    </div>
    </>
  )
}

export default App
