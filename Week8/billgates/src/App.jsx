import './App.css'
import { useState } from "react"
import data from './data.json'

function App() {

  const [totalMoney, setTotalMoney] = useState(100000000000)
  const [itemInput, setItemInput] = useState(0)
  
  function sellFunc(){
    if(itemInput > 0){
          setItemInput(itemInput - 1)
         }
    inputFunc    
  }

  function buyFunc(){
    
    inputFunc
  }

  function inputFunc(){
    
    let price = data[1].price
    //setTotalMoney(totalMoney - (price*itemInput))
    setTotalMoney(price)
  };

  const buyFunct = (hero) => {
    setItemInput(prevItemInput => itemInput + 1)
    setTotalMoney(prevPrice => prevPrice - hero.price);
  };

  return (
    
    <>
    
    <div className="headerContainer">
        <img src="./img/billgates.jpg" alt="billgates" />
        <h1>Spend Bill Gates' Money</h1>
    </div>
    
    <div className="navbar">
    {totalMoney}
    </div>

    <div className='container'>
        {data.map((hero)=>(
            <div className='heroContainer' key={hero.id}>
                
                <img src={hero.img} alt="" />
                <h3>{hero.name}</h3>
                <div><span className='heroPrice'>${hero.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></div>
                <div className='heroButtonContainer'>
                    <button className='btnHeroSell'onClick={sellFunc}>Sell</button>
                    <input value={itemInput} onChange={(e) => handleInputChange(hero.id, e.target.value)} type="number" />
                    <button className='btnHeroBuy' onClick={() => buyFunct(hero)}>Buy</button>  
                </div>
            </div>  
        ))}
        
        
      </div>





    </>
  )
}


export default App