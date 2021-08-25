import React,{useContext} from 'react';
import EveryHourData from './everyHourData'
import {Store} from './App'


// 3時間ごとのデータを取ってくる
// mapとfilterで処理。現在の時間と照らし合わせて予報だけを表示させたい。
//axiosから
const WeeklyWeather =()=>{
    const {weatherData} = useContext(Store)
    console.log(weatherData)
    
    const dat = new Date()
    console.log(dat.getTime())
    return weatherData.everyHourData.list ? (
        <div>
            {weatherData.everyHourData.list.filter(deta =>{
               return  Date.parse(deta.dt_txt.replace(' ', 'T')) > dat.getTime()
            }).map((data,index)=>{
                return <EveryHourData key ={index} dateTime={data.dt_txt} weather={data.weather[0].main} temp={data.main.temp} />
            })}
        </div>
    ):(<div></div>)
}

export default WeeklyWeather

// {props.datmap(res=>{
//                return  <div>{res}</div>
//             })}