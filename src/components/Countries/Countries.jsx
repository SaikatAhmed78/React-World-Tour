import { useEffect } from "react";
import { useState } from "react";
import Countre from "../Countrie/Countre";
import './Countries.css'


function Countries() {

  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
  }, [])

  const handleVisitedCountry = country => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  const handleVisitedFlags = flag =>{
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags)
  }

  return (

    <div>
      <h3>Countries: {countries.length}</h3>

      {/* Visited Countries */}
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>

          {/* Display Flags */}
      <div className="flags-container">
          {
            visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
          }
      </div>


          {/* Display Countries */}
      <div className="coutries-container">
        {
          countries.map(country =>
            <Countre
              key={country.cca3}
              handleVisitedCountry ={handleVisitedCountry}
              handleVisitedFlags = {handleVisitedFlags}
              country={country}>
            </Countre>)
        }
      </div>



    </div>
  );
}

export default Countries;