import { useState } from 'react'
import './country.css'
export default function Country({country,  handleVisitedCountry, handleVisitedFlag}){
    console.log(country)
  const {name,capital} = country
  const [visited,setVisited] = useState(false)

  const handleClick = () => {
    setVisited(!visited);
  }
    return(
        <div className={`country ${visited&&'visited'}`}>
        <h5 >{name.common}</h5>
        <img className='lal' src={country.flags.png} ></img>
        <h5>{capital}</h5>
        <button onClick={()=> handleVisitedCountry(country)}>mark</button>
        
        <button onClick={()=> handleVisitedFlag(country.flags)}>Add Flag</button>
        <br></br>
        <button onClick={handleClick} className='lol'>{visited ? 'visited' : 'Going'}</button>
        {visited?'visited':'i want visited'}
        </div>
    )
}