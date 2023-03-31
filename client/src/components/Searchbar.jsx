const SearchBar = ({keyword, onChange}) => {
    return (
      <input 
       key="search-bar"
       value={keyword}
       placeholder={"Search badges..."}
       onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  
  export default SearchBar;