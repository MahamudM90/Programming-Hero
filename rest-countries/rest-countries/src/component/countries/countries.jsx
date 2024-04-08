import { useEffect, useState } from "react"
import Country from "../country/country"
import './countries.css'

export default function Countries(){
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data=>setCountries(data))

    },[])

    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)

    }
    const handleVisitedFlag = (flag) =>{
        const newVisitedFlags = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlags);
    }
    return(
        <>
        <h3>Rest Countries</h3>
        <div>
            <h5>visited countries:{visitedCountries.length}</h5>
            <ul>
             {
                visitedCountries.map((country)=><p key={country.cca3}>{country.name.common}</p>)
             }
            </ul>
        </div>
        <div>
            {
               visitedFlag.map((flag,inx)=><img key={inx} src={flag.png}></img>)
            }
            
        </div>
        <div className="container">
        {
            countries.map((country)=><Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag} country={country}></Country>)
        }
     </div>
        </>
    )
}