import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  
useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries', error);
    }
  }

  fetchCountries();
}, [])


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
