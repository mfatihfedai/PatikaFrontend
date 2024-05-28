import React, { useContext} from 'react'
import CounterContext from '../context/Context'
import './../css/ShipDetails.css'
import { FaArrowLeft } from "react-icons/fa";


function ShipDetails() {
  const {shipUrl}= useContext(CounterContext)
  const backHomepage = () =>{
    window.location.href = '/'
  }

  return (
    <div className='shipdetail'>
        <a onClick={backHomepage} className='back-home'><FaArrowLeft className='icon'/></a>
        <div>
          <h3>{shipUrl?.name}</h3>
          <img src="https://cdn.icon-icons.com/icons2/335/PNG/256/Millenium_Falcon_-_02_35432.png" alt="" />
          <ul>          
            <li>Manufacturer: <span>{shipUrl?.manufacturer}</span></li>
            <li>Lenght: <span>{shipUrl?.length}</span></li>
            <li>Max Atmosphering Speed: <span>{shipUrl?.max_atmosphering_speed}</span></li>
            <li>Crew: <span>{shipUrl?.crew}</span></li>
            <li>Cargo Capacity: <span>{shipUrl?.cargo_capacity}</span></li>
            <li>MGLT: <span>{shipUrl?.MGLT}</span></li>
            <li>Starship Class: <span>{shipUrl?.starship_class}</span></li>
          </ul>
        </div>
    </div>
  )
}

export default ShipDetails