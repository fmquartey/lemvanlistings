import {
  ChevronLeft,
  ChevronRight,
  Favorite,
  FavoriteBorder,
  FacebookFilter,
  FilterList,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CircularProgress,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick/lib/slider";
import IndexListings from "../ListingCard";
import ListingCard from "../ListingCard";

import Axios from "axios";
import ListingSkeleton from "../ListingSkeleton";
import hse1 from "../.././img/hse1.jpg";
import hse2 from "../.././img/hse2.jpg";
import hse3 from "../.././img/hse3.jpg";
import hse4 from "../.././img/hse4.jpg";
import hse5 from "../.././img/hse5.jpg";
import { apilink } from "../../Helper";
import { testListingData } from "../../listingData";


const OurHome = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const sliderRef = useRef(null);
  const [showTag, setShowTag] = useState(false);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [filterPrice, setFilterPrice] = useState("");
  const [filterPeriod, setFilterPeriod] = useState("month");
  const [filterProperty, setFilterProperty] = useState("apartment");
  const [filterBy, setFilterBy] = useState("");
  const [filterByLocation, setFilterByLocation] = useState("");
  const [filterByBed, setFilterByBed] = useState("");
  const [filterByBath, setFilterByBath] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("accra");

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        },
      },
    ],
  };

  const resetFilter = () => {
    setSearch("");
    handleCloseMenu();
  }
  const filterSearchPrice = () => {
    setFilterBy("price")
    setOpenFilter(true);
    handleCloseMenu();
  }
  const filterSearchProperty = () => {
    setFilterBy("property")
    setOpenFilter(true);
    handleCloseMenu();
  }
  const filterSearchBed = () => {
    setFilterBy("bed")
    setOpenFilter(true);
    handleCloseMenu();
  }
  const filterSearchBath = () => {
    setFilterBy("bath")
    setOpenFilter(true);
    handleCloseMenu();
  }
  const filterSearchLocation = () => {
    setFilterBy("location")
    setOpenFilter(true);
    handleCloseMenu();
  }
  const filterSearchRegion = () => {
    setFilterBy("region")
    setOpenFilter(true);
    handleCloseMenu();
  }

  const filterClose = () => {
    setOpenFilter(false);
    handleCloseMenu();
  }

  const getListings = () => {
    // setListings(testListingData);

    setLoading(true);
    Axios.get(`${apilink}/api/index/page`)
      .then((res) => {
        setLoading(false);
        setListings(res.data.data);
        // console.log(listings);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getListings();
  }, []);

  const allListings = () => {
    navigate("/");
  }

  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            paddingTop: {
              xs: "2rem",
              sm: "2rem",
            },
            paddingLeft: {
              xs: "0.2rem",
              sm: "0.5rem",
            },
            paddingRight: {
              xs: "0.2rem",
              sm: "0.5rem",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
              }}
            >
              Our Homes
            </Typography>

            <Stack spacing={1} direction="row">
              <Button
                onClick={handleMenuClick}
                variant="outlined"
                color="inherit"
                size="small"
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

              <Button
                onClick={allListings}
                variant="outlined"
                color="inherit"
                size="small"
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
                      sm: "16px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: "500",
                    color: "#35BF43",
                  }}
                >
                  View all homes
                </Typography>
              </Button>
            </Stack>
          </Box>

          {/* slider */}
          <Box mt={1}>
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
              Affordable homes to fit your budget.
            </Typography>
          </Box>
          {/* swiper larger screens*/}
          <Box
            mt={2}
            sx={{
              width: "100%",
            }}
          >
            {loading ? (
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
              // Slider //
              // Slider //
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Slider prev button */}
                <IconButton
                  size="small"
                  disableRipple={true}
                  aria-label="previous"
                  onClick={() => sliderRef.current.slickPrev()}
                  edge="start"
                >
                  <ChevronLeft
                    sx={{
                      fontSize: {
                        xs: "2rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "2.5rem",
                      },
                      color: "#000",
                    }}
                  />
                </IconButton>
                {/* Slider content*/}
                <Box
                  sx={{
                    width: "100%",
                    height: "auto",
                    overflow: "hidden",
                  }}
                >
                  <Slider ref={sliderRef} {...settings}>
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
                      }).map((listing, index) => (
                        <IndexListings
                          key={listing.id}
                          image={listing.image}
                          image1={hse2}
                          image2={hse3}
                          image3={hse4}
                          image4={hse5}
                          id={listing.id}
                          showTag={showTag}
                          amount={listing.amount}
                          property_type={listing.property_type.type}
                          number_of_bathrooms={listing.number_of_bathrooms}
                          number_of_bedrooms={listing.number_of_bedrooms}
                          location={listing.location}
                          region={listing.region}
                        />

                        // <ListingCard
                        //   id={listing.id}
                        //   image={listing.image}
                        //   image1={listing.image}
                        //   image2={listing.image}
                        //   image3={listing.image}
                        //   image4={listing.image}
                        //   favorite={
                        //     index = listing.id ? listing.favorite === 1 ?
                        //       (
                        //         <Favorite
                        //           sx={{
                        //             color: "#FF5F05"
                        //           }} />
                        //       ) : (
                        //         <FavoriteBorder
                        //           sx={{
                        //             color: "#fff",
                        //           }}
                        //         />
                        //       ) : null
                        //   }
                        //   showTag={showTag}
                        //   amount={listing.amount}
                        //   property_type={listing.property_type}
                        //   number_of_bathrooms={listing.number_of_bathrooms}
                        //   number_of_bedrooms={listing.number_of_bedrooms}
                        //   location={listing.location}
                        //   region={listing.region}
                        // />
                      ))
                    }
                  </Slider>
                </Box>
                {/*Slider next button Icon*/}
                <IconButton
                  size="small"
                  disableRipple={true}
                  aria-label="next"
                  onClick={() => sliderRef.current.slickNext()}
                  edge="end"
                >
                  <ChevronRight
                    sx={{
                      fontSize: {
                        xs: "2rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "2.5rem",
                      },
                      color: "#000",
                    }}
                  />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>



        <Menu
          id="menu-area"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >

          <Box sx={{
            width: "100%",
            padding: "5px"
          }}>
            <Typography variant="body1" align="center">Filter by</Typography>
          </Box>
          <Divider />
          <MenuItem onClick={resetFilter}>Reset</MenuItem>
          <MenuItem onClick={filterSearchPrice}>Price</MenuItem>
          <MenuItem onClick={filterSearchProperty}>Property</MenuItem>
          {/* <MenuItem onClick={filterSearchBath}>No. Bath</MenuItem>
          <MenuItem onClick={filterSearchBed}>No. Bed</MenuItem> */}
          <MenuItem onClick={filterSearchLocation}>Location</MenuItem>
          <MenuItem onClick={filterSearchRegion}>Region</MenuItem>
        </Menu>

        {/* filter dialog */}
        <Dialog
          maxWidth="xs"
          fullWidth={true}
          open={openFilter}
          aria-describedby="dialog-description"
          aria-labelledby="dialog-title"
        >
          <DialogTitle id="dialog-title">
            Filter results
          </DialogTitle>
          <DialogContent>

            {
              filterBy === "price" ? (
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
                </Box>
              ) : filterBy === "property" ? (
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
              ) : filterBy === "bath" ? (
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
              ) : filterBy === "bed" ? (
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
              ) : filterBy === "location" ? (
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
              ) : filterBy === "region" ? (
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
              ) : null
            }


            <Box sx={{
              width: "100%",
              height: "auto",
              marginTop: "15px",
            }}>
              <Stack spacing={2} direction="row"
                sx={{
                  justifyContent: "flex-end",
                }}>
                <Button
                  onClick={filterClose}
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

                >Cancel
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
                  onClick={() => {
                    const result = filterBy === "price" ? filterPrice + "/" + filterPeriod : filterBy === "property" ? filterProperty : filterBy === "region" ? filterByRegion : filterBy === "location" ? filterByLocation : filterBy === "bed" ? filterByBed : filterBy === "bath" ? filterByBath : null
                    setSearch(result);
                    console.log(result);
                    filterClose();
                  }}
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
};

export default OurHome;
