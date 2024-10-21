import { useState } from 'react';
import './Countre.css';
import CountryDetail from '../CountryDetail/CountryDetail';

const Countre = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`countre ${visited ? 'visited' : 'Non-Visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>

            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add Visited Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I Have Visited This Country.' : 'I will visit In Sha Allah'}
            <hr />

            <CountryDetail
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Countre;