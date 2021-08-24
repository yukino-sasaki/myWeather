import React,{useContext, useEffect, } from 'react';
import axios from 'axios'
import {Store} from './App'


const Axios =()=>{
   const {weatherData, setWeatherData} = useContext(Store)
  
    

const API_KEY ='9e3abc90f5468c5fe36b56f86a48a8cd'

const success=  async (position)=>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const link =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&&appid=${API_KEY}&lang=ja`
    await axios.get(link).then(res =>{
        setWeatherData({type: 'DISPLAY_WEATHER', currentData :res.data})
        console.log(res.data)
        
      
    }).catch(err=>{
        console.log(err)
    })

    const weekLink =`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=9e3abc90f5468c5fe36b56f86a48a8cd&lang=ja`
     await axios.get(weekLink).then(res =>{
        console.log(res,'week')
        
    }).catch(err=>{
        console.log(err)
    })
}

console.log(weatherData)


 const error =()=>{
    alert('not found')
}


useEffect(()=>{
    console.log('useEffecgt')
 navigator.geolocation.getCurrentPosition(success,error)
},[])

    return(
        <div>
            
        </div>
    )
}

export default Axios