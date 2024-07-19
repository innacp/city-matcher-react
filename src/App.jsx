import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  
  
useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const data = response.data.map((country) => ({
        country: country.name.common,
        capital: country.capital ? country.capital[0] : 'N/A',
      }))
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries', error);
    }
  }

  fetchCountries();
}, [])

const generatePair = (countries) => {
  const randomCountry = [Math.floor(Math.random() * countries.length)];
  const randomCapital = [Math.floor(Math.random() * countries.length)].capital;
  setCurrentPair({ country: randomCountry.country, capital: randomCapital });
};

  return(
  <div>
    <h2>Countries</h2>
    {countries.map(country => (
      <li key={country.cca3}>{country.name.common}</li>
    ))}
  </div>

  )
}

export default App
