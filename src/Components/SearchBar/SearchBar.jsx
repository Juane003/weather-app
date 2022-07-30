const SearchBar = ({ onKeyPress }) => {
  return (
    <input type="text" onKeyPress={onKeyPress} placeholder="Search City" required/>
  )
}

export default SearchBar