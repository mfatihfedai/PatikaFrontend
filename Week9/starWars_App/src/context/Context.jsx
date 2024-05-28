import { createContext, useEffect, useState } from "react";
import axios from 'axios'
const CounterContext = createContext();


import React from 'react'


const BASE_URL="https://swapi.dev/api/starships/?page=1&format=json"

export function CounterProvider({children}) {
  const [ships,setShips]= useState()
  const [count,setCount]= useState(2)

  const getAllUser= async ()=>{
    const res = await axios.get(BASE_URL);    
    setShips(res.data.results)
  } 

  const handeleNewAxios = async() =>{
    setCount(count+1)
    const newRes = await axios.get(`https://swapi.dev/api/starships/?page=${count}&format=json`)
    const data = newRes.data
    setShips(
      ships.concat(data.results)
    )
  }
  const [newship,setNewShip] = useState()
  
  const [filterShip, setFilterShip] = useState([])
  
  const indexhandle = (ship,e) =>{
    e.preventDefault();
    setNewShip(ship.url)
  }
  
  const [shipUrl,setShipUrl]= useState()
  
  const getNewUser = async (url)=>{
    let newUrl = url+"?format=json"
    const response = await axios.get(newUrl)
    const data =response.data
    setShipUrl(data)
  }
  

  const data ={
    ships,
    setShips,
    count,
    setCount,
    getAllUser,
    handeleNewAxios,
    newship,
    setNewShip,
    shipUrl,
    getNewUser,
    filterShip,
    setFilterShip,
    indexhandle
  }

  return (
    <CounterContext.Provider 
    value={data}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContext;