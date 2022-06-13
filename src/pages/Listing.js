import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ListingCard from "../components/ListingCard";
import { UserContext } from "../context/UserContext";

const Listing = () => {
  // const user = JSON.parse(localStorage.getItem("user-info"));
const { setShowNav } = useContext(UserContext);

useEffect(() => {
  setShowNav(true);
}, []);

  return (
    <Box
      p={2}
      sx={{
        marginTop: "3px",
      }}
    >
      <Container maxWidth="lg">
        <Typography align="center">Comming soon</Typography>
      </Container>
    </Box>
  );
};

export default Listing;
