export default function SearchBar ({searchItem, handleInputChange}) {
  return (
    <div>      
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
    </div>
  )
}