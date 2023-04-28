import React, { useState } from "react";
import './search.css';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('athlete');
  const [searchField, setSearchField] = useState('both');
  const [country, setCountry] = useState('');
  const [discipline, setDiscipline] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    props.onSearch(searchTerm, searchType, searchField, country, discipline);
  };

  return (
    <form onSubmit={handleSearch}>
      <label style={{ display: 'inline-block' }}>
        Search for:&nbsp;
        <select name="searchType" style={{ display: 'inline-block' }} value={searchType} onChange={(event) => setSearchType(event.target.value)}>
          <option value="athlete">Athletes</option>
          <option value="coach">Coaches</option>
          <option value="both">Both</option>
        </select>
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label style={{ display: 'inline-block' }}>
        Search by:&nbsp;
        <select name="searchField" style={{ display: 'inline-block' }} value={searchField} onChange={(event) => setSearchField(event.target.value)}>
          <option value="firstName">First name</option>
          <option value="lastName">Last name</option>
          <option value="both">First and last name</option>
        </select>
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label style={{ display: 'inline-block' }}>
        Name:&nbsp;
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label style={{ display: 'inline-block' }}>
        Country:&nbsp;
        <input type="text" name="country" style={{ display: 'inline-block' }} value={country} onChange={(event) => setCountry(event.target.value)} />
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label style={{ display: 'inline-block' }}>
        Discipline:&nbsp;
        <input type="text" name="discipline" style={{ display: 'inline-block' }} value={discipline} onChange={(event) => setDiscipline(event.target.value)} />
      </label>
      &nbsp;
      <button type="submit" style={{ display: 'inline-block' }}>Search</button>
    </form>
  );
}

export default SearchBar;
