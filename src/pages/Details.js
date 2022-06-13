import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";

const Details = () => {
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

export default Details;
