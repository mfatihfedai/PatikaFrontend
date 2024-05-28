import React, { useContext} from 'react'
import CounterContext from '../context/Context'
import './../css/Section.css'

function Section() {
  const {ships}= useContext(CounterContext)
  const {setFilterShip}= useContext(CounterContext)
  const handleChange= (e)=>{
    let newE = e.toUpperCase().trim()
    if (ships.length ) {
      setFilterShip(ships.filter((item)=>item.name.toUpperCase().trim().includes(newE)))      
    }
  }
  const backHomepage = () =>{
    window.location.href = '/'
  }

  return (
    <>
      <a onClick={backHomepage} className='back-home'><img src="./logo.png" alt="logo" /></a>
      <div className='search'>
          <label htmlFor="">Name/Model:
            <input type="text" placeholder='Name/Model'   onChange={(e)=> handleChange(e.target.value)}/>
          </label>
          <button >Filter</button>
      </div>      
    </>
  )
}

export default Section
