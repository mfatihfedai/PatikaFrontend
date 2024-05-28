import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import User from './component/User'
import Section from './component/Section'
import CounterContext from './context/Context.jsx'
import ShipDetails from './component/ShipDetails.jsx'
import FilterShip from './component/FilterShip.jsx'

function App() {
  const {ships,handeleNewAxios,getAllUser,newship,getNewUser,filterShip}= useContext(CounterContext)
  useEffect(()=>{
    getAllUser();
  },[])
  useEffect(()=>{
    getNewUser(newship)
  },[newship])
  
  return (
    <>
      <div className='ships'>
        <Section/>
        <div className='ship-map' >
          {
            newship === undefined || "" || null ? 
            filterShip === undefined || "" ||filterShip.length === 0 ||filterShip.length>9 ||null?
            ships?.map((ship)=>(
              <User key={ship.model} ship={ship} id='home'></User>
              )): filterShip?.map((filter)=>(
                <FilterShip key={filter.name} filter={filter}></FilterShip>
              ))
             :<ShipDetails/>  
          }
        </div>
        {
          newship === undefined || "" || null?
          <button className='new-request' onClick={handeleNewAxios}>Next</button>:null    
        }
      </div>
    </>        
  )
}

export default App
