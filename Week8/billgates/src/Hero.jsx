//import React from 'react'
import data from './data.json'
function Hero() {

  return (
    
    <div>
        <div className='container'>
        {data.map((hero)=>(
            <div className='heroContainer' key={hero.id}>
                
                <img src={hero.img} alt="" />
                <h3>{hero.name}</h3>
                <div><span className='heroPrice'>${hero.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></div>
                <div className='heroButtonContainer'>
                    <button className='btnHeroSell'>Sell</button>
                    <input type="number" />
                    <button className='btnHeroBuy'>Buy</button>  
                </div>
            </div>  
        ))}
        
        
        </div>
        


    </div>
  )
}

export default Hero