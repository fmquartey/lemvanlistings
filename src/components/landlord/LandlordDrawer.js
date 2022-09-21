import { Box, Drawer, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { navigation } from "./Navigations.js";

const LandlordDrawer = () => {
    const { openLandlordDrawer, setOpenLandlordDrawer } = useContext(UserContext);

  return (
      <Drawer anchor="left" open={openLandlordDrawer} onClose={() => setOpenLandlordDrawer(false)}>
          <Box
              role="presentation"
              sx={{
                  width: "220px",
                  height: "100vh",
                  display: {
                      xs: "block",
                      sm: "none",
                      md: "none",
                      lg: "none",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  backgroundColor: "#FBFDFB",
                  padding: "10px",
              }}>
              <Box sx={{
                  width: "100%",
                  padding: "10px",
              }}>
                  <Typography align="center" variant="body1" sx={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#35BF43",
                  }}>LOGO</Typography>
              </Box>

              {/* navigations */}
              <Box sx={{
                  width: "100%",
                  height: "auto",
                  marginTop: "20px",
              }}>
                  {
                      navigation.map((nav, index) => {
                          return (
                              <Link
                                  style={{
                                      textDecoration: "none",
                                      color: "#000",
                                  }}
                                  key={index}
                                  to={nav.path}
                                  onClick={() => setOpenLandlordDrawer(false)}
                              >
                                  <Box
                                      sx={{
                                          width: "100%",
                                          height: "40px",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "flex-start",
                                          padding: "0px 10px",
                                          marginBottom: "5px",
                                          borderRadius: "5px",
                                          color: window.location.pathname === nav.path ? "#FFFFFF" : null,
                                          backgroundColor: window.location.pathname === nav.path ? "#35BF43" : null,
                                          "&:hover": {
                                              backgroundColor: "#35BF43",
                                              color: "#FFFFFF",
                                          }
                                      }}
                                  >
                                      <Box sx={{
                                          marginRight: "15px",
                                          display: "flex",
                                          alignItems: "center",
                                      }}>
                                          {nav.icon}
                                      </Box>
                                      <Box>
                                          <Typography variant="body1"
                                              sx={{
                                                  fontSize: "14px",
                                              }}>{nav.name}</Typography>
                                      </Box>
                                  </Box>
                              </Link>
                          )
                      })
                  }
              </Box>
          </Box >
      </Drawer>
  );
}

export default LandlordDrawer;
