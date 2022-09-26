import { Close, Favorite, FavoriteBorder, FilterList, Search } from "@mui/icons-material";
import { Box, Button, CircularProgress, Container, Divider, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, InputBase, MenuItem, Paper, TextField, Typography, Stack, Menu, IconButton, Alert } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import Listings from "../components/Listings";
import { UserContext } from "../context/UserContext";
import Axios from "axios";
import ReactPaginate from "react-paginate";
import { apilink } from "../Helper";
import { testListingData } from "../listingData";

const Listing = () => {
  // const user = JSON.parse(localStorage.getItem("user-info"));
  const { setShowNav, token, lat, long } = useContext(UserContext);
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTag, setShowTag] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [filterPrice, setFilterPrice] = useState("");
  const [filterPeriod, setFilterPeriod] = useState("month");
  const [filterProperty, setFilterProperty] = useState("apartment");
  const [filterBy, setFilterBy] = useState("");
  const [filterByLocation, setFilterByLocation] = useState("");
  const [filterByBed, setFilterByBed] = useState("");
  const [filterByBath, setFilterByBath] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("accra");
  const [statusMsg, setStatusMsg] = useState("");


  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };


  const authAxios = Axios.create({
    baseURL: apilink,
    headers: {
      Authorization: "Bearer " + token,
      "content-type": 'multipart/form-data'
    },
  });

  const getListings = () => {
    // setListings(testListingData)
    setLoading(true);
    authAxios.get(`/api/listings`)
      .then((res) => {
        setLoading(false);
        setListings(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchListings = (e) => {
    setSearch(e.target.value);
    setLoading(true);
    authAxios.get(`/api/listings/search/${search}`)
      .then((res) => {
        setLoading(false);
        setListings(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
    setOpenAlert(false);
  }

  const filterClose = () => {
    setOpenFilter(false);
  }

  const handlefilter = () => {
    if (filterPrice === "" || filterByBed === "" || filterByBath === "" || filterByLocation === "") {
      setStatusMsg("All fields are required for this action");
      setOpenAlert(true);
    } else {
      filterClose();
      const formData = new FormData();
      const price = filterPrice + "/" + filterPeriod;
      formData.append("amount", price);
      formData.append("property_type_id", filterProperty);
      formData.append("number_of_bedrooms", filterByBed);
      formData.append("number_of_bathrooms", filterByBath);
      formData.append("location", filterByLocation);
      formData.append("region", filterByRegion);
      setLoading(true);
      authAxios.post("/api/listings", formData)
        .then((res) => {
          setLoading(false);
          setListings(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const resetFilter = () => {
    getListings();
    filterClose();
    setFilterPrice("");
    setFilterByBed("");
    setFilterByBath("");
    setFilterByLocation("");
    setFilterByRegion("accra");
    setFilterProperty("apartment");
    setFilterPeriod("month");
  }


  const handlePageClick = (e) => {
    console.log(e.selected);
  }

  const seachChange = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    setShowNav(true);
    getListings();
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
                      onChange={seachChange}
                      endAdornment={
                        <Search
                          sx={{
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
                  onClick={handleOpenFilter}
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

          {/*  */}
          {/*  */}
          {/* listings */}
          {
            loading ? (
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress
                  size={25}
                  sx={{
                    color: "#35BF43",
                  }}
                />
              </Box>

            ) : (
              <>
                <Box
                  mt={2}
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Grid container columnSpacing={1} rowSpacing={1}>
                    {
                      listings.filter((res) => {
                        return search.toLowerCase() === "" ? res :
                          res.location.toLowerCase().includes(search.toLowerCase())
                          ||
                          res.amount.toLowerCase().includes(search.toLowerCase())
                          ||
                          res.number_of_bathrooms.toString().includes(search)
                          ||
                          res.number_of_bedrooms.toString().includes(search)
                          ||
                          res.region.toLowerCase().includes(search.toLowerCase())
                          ||
                          res.property_type.type.toLowerCase().includes(search.toLowerCase())
                      }).map((data, index) => (
                        <Grid key={data.id} item xs={6} sm={4} md={3} lg={3}>
                          <ListingCard
                            id={data.id}
                            image={data.image}
                            image1={data.image}
                            image2={data.image}
                            image3={data.image}
                            image4={data.image}
                            favorite={
                              index = data.id ? data.favorite === 1 ?
                                (
                                  <Favorite
                                    sx={{
                                      color: "#FF5F05"
                                    }} />
                                ) : (
                                  <FavoriteBorder
                                    sx={{
                                      color: "#fff",
                                    }}
                                  />
                                ) : null
                            }
                            showTag={showTag}
                            amount={data.amount}
                            property_type={data.property_type.type}
                            number_of_bathrooms={data.number_of_bathrooms}
                            number_of_bedrooms={data.number_of_bedrooms}
                            location={data.location}
                            region={data.region}
                          />
                          {/* <ListingCard
                            id={data.id}
                            image={data.image}
                            image1={data.image}
                            image2={data.image}
                            image3={data.image}
                            image4={data.image}
                            favorite={
                              index = data.id ? data.favorite === 1 ?
                                (
                                  <Favorite
                                    sx={{
                                      color: "#FF5F05"
                                    }} />
                                ) : (
                                  <FavoriteBorder
                                    sx={{
                                      color: "#fff",
                                    }}
                                  />
                                ) : null
                            }
                            showTag={showTag}
                            amount={data.amount}
                            property_type={data.property_type}
                            number_of_bathrooms={data.number_of_bathrooms}
                            number_of_bedrooms={data.number_of_bedrooms}
                            location={data.location}
                            region={data.region}
                          /> */}
                        </Grid>
                      ))
                    }
                  </Grid>
                </Box>
                <Box sx={{
                  padding: {
                    xs: '1rem 0',
                    sm: '1rem 0',
                    md: '1rem',
                    lg: '1rem',
                  },
                  width: "100%",
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-end",
                    lg: "flex-end",
                  },
                  alignItems: "center",
                }}>
                  <Paper
                    elevation={0}
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "auto",
                        lg: "auto",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: " 0 1rem",
                    }}>
                    <ReactPaginate
                      previousLabel={"Prev"}
                      nextLabel={"Next"}
                      breakLabel={"..."}
                      pageCount={50}
                      marginPagesDisplayed={1}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      activeLinkClassName={"active"}
                      previousLinkClassName={"prevlink"}
                      previousClassName={"prev"}
                      pageClassName={"page-num"}
                      pageLinkClassName={"page-num"}
                      nextLinkClassName={"page-num"}
                      nextClassName={"next"}
                      renderOnZeroPageCount={false}
                      pageRangeDisplayed={1}
                    />
                  </Paper>
                </Box>
              </>
            )
          }


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

        {/* filter dialog */}
        <Dialog

          maxWidth="xs"
          fullWidth={true}
          open={openFilter}
          aria-describedby="dialog-description"
          aria-labelledby="dialog-title"
        >
          <IconButton
            onClick={filterClose}
            color="inherit"
            sx={{
              position: "absolute",
              top: "8px",
              right: "10px",
            }}
          >
            <Close
              sx={{
                fontSize: "1rem",
              }}
            />
          </IconButton>
          <DialogTitle id="dialog-title">
            Filter results
          </DialogTitle>
          <DialogContent>

            {
              openAlert ? (
                <Alert severity="error" sx={{ width: '100%' }}>
                  {statusMsg}
                </Alert>
              ) : null
            }

            <Box mt={1}>
              <Typography variant="body1"
                sx={{
                  fontWeight: "550",
                  fontSize: {
                    sm: "14px",
                    md: "14px",
                    lg: "14px",
                  },

                }}
              >
                Price
              </Typography>
              <Box
                sx={{
                  marginTop: "3px",
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                }}>
                <TextField
                  color="success"
                  fullWidth={true}
                  size="small"
                  type="text"
                  value={filterPrice}
                  placeholder="0"
                  onChange={(e) => setFilterPrice(e.target.value)}
                />
                &nbsp;
                <TextField
                  color="success"
                  select
                  fullWidth={true}
                  size="small"
                  value={filterPeriod}
                  onChange={(e) => setFilterPeriod(e.target.value)}
                >
                  <MenuItem value="month">Month</MenuItem>
                  <MenuItem value="year">Year</MenuItem>
                </TextField>
              </Box>

              {/* property type */}
              <Box mt={1}>
                <Typography variant="body1"
                  sx={{
                    fontWeight: "550",
                    fontSize: {
                      sm: "14px",
                      md: "14px",
                      lg: "14px",
                    },

                  }}
                >
                  Property type
                </Typography>
                <Box sx={{
                  marginTop: "3px",
                  width: "100%",
                  height: "auto",
                }}>
                  <TextField
                    color="success"
                    select
                    fullWidth={true}
                    size="small"
                    value={filterProperty}
                    onChange={(e) => setFilterProperty(e.target.value)}
                  >
                    <MenuItem value="apartment">Apartment</MenuItem>
                    <MenuItem value="single room">Single room</MenuItem>
                  </TextField>
                </Box>
              </Box>

              {/* No. Bathrooms / Bedroom*/}
              <Box mt={1}
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "auto"
                }}>

                {/* No. bedroom */}
                <Box>
                  <Typography variant="body1"
                    sx={{
                      fontWeight: "550",
                      fontSize: {
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                    }}
                  >
                    No. Bedrooms
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "3px",
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <TextField
                      color="success"
                      fullWidth={true}
                      size="small"
                      type="number"
                      value={filterByBed}
                      placeholder="0"
                      onChange={(e) => setFilterByBed(e.target.value)}
                    />

                  </Box>
                </Box>
                &nbsp;
                {/* No. bathroom */}
                <Box>
                  <Typography variant="body1"
                    sx={{
                      fontWeight: "550",
                      fontSize: {
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },

                    }}
                  >
                    No. Bathrooms
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "3px",
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <TextField
                      color="success"
                      fullWidth={true}
                      size="small"
                      type="number"
                      value={filterByBath}
                      placeholder="0"
                      onChange={(e) => setFilterByBath(e.target.value)}
                    />
                  </Box>
                </Box>
              </Box>

              {/* location */}
              <Box mt={1}>
                <Typography variant="body1"
                  sx={{
                    fontWeight: "550",
                    fontSize: {
                      sm: "14px",
                      md: "14px",
                      lg: "14px",
                    },
                  }}
                >
                  Location
                </Typography>
                <Box
                  sx={{
                    marginTop: "3px",
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <TextField
                    color="success"
                    fullWidth={true}
                    size="small"
                    value={filterByLocation}
                    onChange={(e) => setFilterByLocation(e.target.value)}
                  />
                </Box>

              </Box>

              {/* region */}
              <Box mt={1}>
                <Typography variant="body1"
                  sx={{
                    fontWeight: "550",
                    fontSize: {
                      sm: "14px",
                      md: "14px",
                      lg: "14px",
                    },
                  }}
                >
                  Region
                </Typography>
                <Box
                  sx={{
                    marginTop: "3px",
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <TextField
                    select
                    color="success"
                    fullWidth={true}
                    size="small"
                    value={filterByRegion}
                    onChange={(e) => setFilterByRegion(e.target.value)}
                  >
                    <MenuItem value="accra">Greater Accra</MenuItem>
                    <MenuItem value="central">Central</MenuItem>
                    <MenuItem value="ashanti">Ashanti</MenuItem>
                    <MenuItem value="brong ahafo">Brong ahafo</MenuItem>
                    <MenuItem value="eastern">Eastern</MenuItem>
                    <MenuItem value="northern">Northern</MenuItem>
                    <MenuItem value="upper east">Upper east</MenuItem>
                    <MenuItem value="upper west">Upper west</MenuItem>
                    <MenuItem value="western">Western</MenuItem>
                  </TextField>
                </Box>
              </Box>

            </Box>

            <Box sx={{
              width: "100%",
              height: "auto",
              marginTop: "15px",
            }}>
              <Stack spacing={2} direction="row"
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "flex-end",
                    md: "flex-end",
                    lg: "flex-end"
                  },
                }}>
                <Button
                  onClick={resetFilter}
                  size="small"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    textDecoration: "none",
                    fontSize: "14px",
                    backgroundColor: "#35BF43",
                    "&:hover": {
                      backgroundColor: "#35BF43",
                    }
                  }}

                >Reset
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    textDecoration: "none",
                    fontSize: "14px",
                    backgroundColor: "#35BF43",
                    "&:hover": {
                      backgroundColor: "#35BF43",
                    }
                  }}
                  onClick={handlefilter}
                >
                  Filter
                </Button>
              </Stack>
            </Box>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}

export default Listing;
