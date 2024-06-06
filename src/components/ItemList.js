import React, { useState, useEffect } from 'react';
import { Container, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

const ItemList = ({ searchQuery }) => {
  // State to hold the list of items fetched from the API
  const [items, setItems] = useState([]);
  // State to manage the loading state
  const [loading, setLoading] = useState(true);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data to the items state
        setItems(data);
        // Set loading to false after data is fetched
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filter items based on the search query
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show a loading spinner while data is being fetched
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <List>
        {filteredItems.map((item) => (
          // Render each item as a list item
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={item.body} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ItemList;

