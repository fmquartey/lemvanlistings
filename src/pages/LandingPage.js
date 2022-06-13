import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Header from "../components/landingpage/Header";
import OurHome from "../components/landingpage/OurHome";
import Reviews from "../components/landingpage/Reviews";
import { UserContext } from "../context/UserContext";
const LandingPage = () => {
  const { setShowNav } = useContext(UserContext);

  useEffect(() => {
    setShowNav(true);
  }, []);

  return (
    <Box
      sx={{
        marginTop: "3px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FBFDFB",
        }}
      >
        <Header />
      </Box>
      <Box>
        <OurHome />
      </Box>
      <Box>
        <Reviews />
      </Box>
    </Box>
  );
};

export default LandingPage;
