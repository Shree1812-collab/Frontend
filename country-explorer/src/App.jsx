import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';

function App() {
  // countries will hold the full list from the API
  const [countries, setCountries] = useState([]);
  // searchTerm tracks what the user types in the search box
  const [searchTerm, setSearchTerm] = useState('');
  // loading helps us show a Please wait message while data is fetching
  const [loading, setLoading] = useState(true);

  // useEffect runs once when the page first loads
  useEffect(() => {
    // We use Axios to knock on the API's door and ask for country data
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3')
      .then((response) => {
        setCountries(response.data); // Save the data into our state
        setLoading(false);           // Turn off the loading spinner
      })
      .catch((error) => {
        console.error("Oops! Something went wrong:", error);
        setLoading(false);
      });
  }, []); // empty array means "run this only once"

  // Filter the list of countries based on the user's search
  // We convert everything to lowercase so India and india both match
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* header section */}
      <header className="bg-white border-b p-6 mb-8 shadow-sm">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          🌍 World Explorer
        </h1>
      </header>

      <main className="container mx-auto px-4">
        {/* We pass setsearchterm as a prop so the searchbar can talk back to App.jsx */}
        <SearchBar setSearchTerm={setSearchTerm} />

        {/* Conditional Rendering- Show loading text or the actual list */}
        {loading ? (
          <p className="text-center text-xl animate-pulse">Loading countries...</p>
        ) : (
          <CountryList countries={filteredCountries} />
        )}
      </main>
    </div>
  );
}

export default App;