import './../css/User.css'
import React, { useContext} from 'react'
import CounterContext from '../context/Context'

function User({ship}) {
  const {indexhandle}= useContext(CounterContext)
  
  return (
    <div className='ship-profile' onClick={(e)=>{indexhandle(ship,e)}}>
     <a href={`${ship.name}`} >
      <div className='image'><img src="https://cdn.icon-icons.com/icons2/335/PNG/256/Millenium_Falcon_-_02_35432.png" alt="" /></div>
      <div className='info'>
          <h3>{ship.name}</h3>
          <p>Model: <span>{ship.model}</span></p>
          <p>Hyperdrive Rating: <span>{ship.hyperdrive_rating}</span></p>
      </div>
      </a>  
    </div>
  )
}

export default User