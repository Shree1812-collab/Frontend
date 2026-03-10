import CountryCard from './CountryCard';

const CountryList = ({ countries }) => {
  // If the user searches for Zootopia and it doesn't exist, show a message
  if (countries.length === 0) {
    return <p className="text-center text-gray-500">No countries found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* .map() is like a loop=for every country in the array, create a CountryCard */}
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;