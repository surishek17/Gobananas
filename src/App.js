import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import { CssBaseline } from '@mui/material';

const App = () => {
  // State to hold the search query input by the user
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      {/* Normalize CSS for consistent styling across browsers */}
      <CssBaseline />
      {/* Navbar component */}
      <Navbar />
      {/* Search bar component */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* List of items, filtered by search query */}
      <ItemList searchQuery={searchQuery} />
    </div>
  );
};

export default App;


