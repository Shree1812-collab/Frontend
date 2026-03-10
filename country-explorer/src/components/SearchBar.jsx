const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="max-w-md mx-auto mb-10">
      <input
        type="text"
        placeholder="Type a country name (e.g. India)..."
        // Whenever the user types, we update the state in App.jsx
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
      />
    </div>
  );
};

export default SearchBar;