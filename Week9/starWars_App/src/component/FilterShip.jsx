import React, { useContext } from 'react'
import CounterContext from '../context/Context'
import './../css/User.css'

function FilterShip({filter}) {
    const {indexhandle}= useContext(CounterContext)
  return (
    <div className='ship-profile' onClick={(e)=>{indexhandle(filter,e)}}>
        <a href={`${filter.name}`} >
                <div className='image'><img src="https://cdn.icon-icons.com/icons2/335/PNG/256/Millenium_Falcon_-_02_35432.png" alt="" /></div>
                <div className='info'>
                    <h3>{filter.name}</h3>
                    <p>Model: <span>{filter.model}</span></p>
                    <p>Hyperdrive Rating: <span>{filter.hyperdrive_rating}</span></p>
                </div>
           </a>  
    </div>
  )
}

export default FilterShip
