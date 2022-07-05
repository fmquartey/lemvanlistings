import { Box, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
      <Box sx={{
          width: "100%",
          height: "auto",
          dispay: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px"
      }}>
          <Typography align="center">Home</Typography>
      </Box>
  );
}

export default Home;
