const CountryCard = ({ country }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
      {/* Flag */}
      <img 
        src={country.flags.svg} 
        alt="flag" 
        className="w-full h-40 object-cover"
      />
      
      {/* Country Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{country.name.common}</h2>
        <p className="text-sm text-gray-600">
          <strong>Region:</strong> {country.region}
        </p>
        <p className="text-sm text-gray-600">
          {/* adds commas */}
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;