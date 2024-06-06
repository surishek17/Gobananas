import React from 'react';
import { TextField, Container } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Container>
       {/* Input field to take user search query  */}
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        margin="normal"
      />
    </Container>
  );
};

export default SearchBar;

