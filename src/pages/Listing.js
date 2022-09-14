import { FilterList, Search } from "@mui/icons-material";
import { Box, Button, CircularProgress, Container, Divider, Grid, InputBase, Menu, MenuItem, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import Listings from "../components/Listings";
import { UserContext } from "../context/UserContext";
import Axios from "axios";
import ReactPaginate from "react-paginate";
import { apilink } from "../Helper";

const Listing = () => {
  // const user = JSON.parse(localStorage.getItem("user-info"));
  const { setShowNav, token } = useContext(UserContext);
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTag, setShowTag] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [bookmark, setBookmark] = useState([]);
  const [action, setAction] = useState(1)

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
    setLoading(true);
    authAxios.get(`/api/listings`)
      .then((res) => {
        setLoading(false);
        setListings(res.data.data);
        console.log(res.data.data);
        // setBookmark(res.data.data.bookmark);
        // console.log(res.data.data.bookmark.action);
        // action === 1 ? setFavorite(true) : setFavorite(false);
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

  // const addFavorite = (id) => {

  //   authAxios.get(`/api/listings/wishList/add/${id}`).then((res) => {
  //     console.log(action)
  //     console.log(res.data.data)
  //     setAction(0)
  //   }).catch((err) => {
  //     console.log(err)
  //   });
  //   // } else {
  //   //   authAxios.get(`/api/listings/wishList/remove/${id}`).then((res) => {
  //   //     console.log(res.data.data)
  //   //     setAction(1)
  //   //   }).catch((err) => {
  //   //     console.log(err)
  //   //   });
  //   // }
  // }

  const handlePageClick = (e) => {
    console.log(e.selected);
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
                      onChange={searchListings}
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
                  onClick={handleMenuClick}
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
                          return search.toLocaleLowerCase() === "" ? res: res.location.toLocaleLowerCase().includes(search)
                        }).map((data) => (
                      <Grid key={data.id} item xs={6} sm={4} md={3} lg={3}>
                        <ListingCard
                          id={data.id}
                          image={data.image}
                          image1={data.image}
                          image2={data.image}
                          image3={data.image}
                          image4={data.image}
                          favorite={favorite}
                          showTag={showTag}
                          amount={data.amount}
                          property_type={data.property_type.type}
                          number_of_bathrooms={data.number_of_bathrooms}
                          number_of_bedrooms={data.number_of_bedrooms}
                          location={data.location}
                          region={data.region}
                        />
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
          {/* <MenuItem>Search by</MenuItem> */}
          <Box sx={{
            width: "100%",
            padding: "5px"
          }}>
            <Typography variant="body1" align="center">Search by</Typography>
          </Box>
          <Divider />
          <MenuItem onClick={handleCloseMenu}>Price</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Property</MenuItem>
          <MenuItem onClick={handleCloseMenu}>No. Bath</MenuItem>
          <MenuItem onClick={handleCloseMenu}>No. Bed</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Location</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Region</MenuItem>
        </Menu>

      </Container>
    </Box>
  );
}

export default Listing;
