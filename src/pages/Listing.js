import { FilterList, Search } from "@mui/icons-material";
import { Box, Button, Container, Grid, InputBase, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import Listings from "../components/Listings";
import { UserContext } from "../context/UserContext";

const Listing = () => {
  // const user = JSON.parse(localStorage.getItem("user-info"));
  const { setShowNav } = useContext(UserContext);
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredListings, setFilteredListings] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setShowNav(true);
  }, []);

  return (
    <Box
      p={2}
      sx={{
        marginTop: "3px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Top section: search and filter*/}
        <Box sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "2.1rem",
                    lg: "2.1rem",
                  },
                  color: "#35BF43",
                }}>
                Our Homes
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={9} lg={10}>
              <Box sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>

                {/* Search box */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "80%",
                      lg: "80%",
                    },
                    height: {
                      xs: "100%",
                      sm: "100%",
                      md: "84%",
                      lg: "84%",
                    },
                    border: "1px solid #35BF43",
                    borderRadius: "10px",
                    marginRight: {
                      xs: "0.5rem",
                      sm: "0.5rem",
                    },
                    padding: {
                      xs: "0 0.7rem",
                      sm: "0 0.7rem",
                      md: "0 1.2rem",
                      lg: "0 1.2rem",
                    },
                  }}>
                    <InputBase
                      fullWidth={true}
                      placeholder="Search a city or building"
                      margin="none"
                      size="medium"
                      endAdornment={
                        <Search sx={{
                          color: "#35BF43",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "1.7rem",
                            lg: "1.7rem",
                          },
                        }} />
                      } />
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="medium"
                  startIcon={<FilterList sx={{ color: "#35BF43" }} />}
                  sx={{
                    textTransform: "none",
                    borderRadius: "5px",
                    border: "1px solid #07A804",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: "500",
                      color: "#35BF43",
                    }}
                  >
                    Filter
                  </Typography>
                </Button>
              </Box>

            </Grid>
          </Grid>
        </Box>

        {/* Listings section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box mt={2} sx={{
            width: "100%",
          }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                },
                textAlign: "start",
                color: "#000",
              }}
            >
              Affordable homes to fit your budget.
            </Typography>
          </Box>
          {/* listings */}
          <Listings />
          <Box
            mt={2}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "18px",
                  lg: "18px",
                },
                color: "#000",
              }}
            >
              Choose a home let us connect you directly to the owner. No Agents fees.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Listing;
