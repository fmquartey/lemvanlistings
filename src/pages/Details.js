import { CheckCircle, ChevronLeft, ChevronRight, ExpandMore, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Container, Checkbox, CircularProgress, Divider, Grid, IconButton, Stack, Typography, Button, Paper, Avatar, TextField, MenuItem } from "@mui/material";
import React, { useContext, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";


import Axios from "axios";

import Slider from "react-slick";
import DetailsImg from "../components/DetailsImg";
import ListingCard from "../components/ListingCard";
import SimilarListings from "../components/SimilarListings";
import hse4 from "../img/hse4.jpg";
import hse3 from "../img/hse3.jpg";
import hse2 from "../img/hse2.jpg";
import hse1 from "../img/hse1.jpg";
import hse5 from "../img/hse5.jpg";

import { UserContext } from "../context/UserContext";
import { apilink } from "../Helper";
import ApplyListings from "../components/ApplyListings";


const Details = () => {
  const { token, setShowNav, user } = useContext(UserContext);
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const [inspectionType, setInspectionType] = useState("Physical")
  const [showTag, setShowTag] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [imgs, setImgs] = useState([]);
  const [hasKitchen, setHasKitchen] = useState();
  const [hasWater, setHasWater] = useState();
  const [isVerified, setIsVerified] = useState();
  const [hasElectricity, setHasElectricity] = useState();
  const [isFurnished, setIsFurnished] = useState();
  const [loading, setLoading] = useState(false);
  const [similarLoading, setSimilarLoading] = useState(false);
  const [listing, setListing] = useState([]);
  const [similarListing, setSimilarListing] = useState([]);
  const [name, setName] = useState("");
  const backendurl = apilink;
  const [openApply, setOpenApply] = useState(false);



  const authAxios = Axios.create({
    baseURL: apilink,
    headers: {
      Authorization: "Bearer " + token,
      "content-type": 'multipart/form-data'
    },
  });

  const getListing = () => {
    setLoading(true);
    Axios.get(`${backendurl}/api/listings/${id}`)
      .then((res) => {
        setLoading(false);
        setListing(res.data.data);
        console.log(res.data.data)
        setSelectedImg(res.data.data.images[0]);
        setImgs(res.data.data.images);
        setHasKitchen(res.data.data.has_kitchen);
        setHasElectricity(res.data.data.has_electricity);
        setIsVerified(res.data.data.is_verified);
        setIsFurnished(res.data.data.is_furnished);
        setHasWater(res.data.data.has_water);
        similarListings();
        setName(res.data.data.user.firstname + " " + res.data.data.user.lastname)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const similarListings = () => {
    setSimilarLoading(true);
    Axios.get(`${backendurl}/api/similar/listings/${id}`)
      .then((res) => {
        setSimilarLoading(false);
        setSimilarListing(res.data.data);

      })
      .catch((err) => {
        console.log(err);
      });
  };



  const handleClose = () => {
    setOpenApply(false)
  }

  const handleOpenApply = () => {
    setOpenApply(true)
  }

  const applyListing = () => {
    const formdata = new FormData();
    formdata.append("listing_id", id);
    authAxios.post(`/api/listings/${id}/apply`).then((res) => {
    }).catch((err) => { })
  }

  useEffect(() => {
    getListing();
    setShowNav(true);
  }, [id]);



  const sliderRef = useRef(null);

  const imgslider = useRef(null);

  var imgsettings = {
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
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
        },
      },
    ],
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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


  const handleChange = (e) => {
    setInspectionType(e.target.value);
  }

  const saveFavorite = (id) => {
    if (!checked) {
      setChecked(true);
      authAxios.get(`/api/listings/wishList/add/${id}`).then((res) => {
        console.log(res.data.data);
        console.log("Saved");
      }).catch((err) => {
        console.log(err)
      })
    } else {
      setChecked(false);
      authAxios.get(`/api/listings/wishList/remove/${id}`).then((res) => {
        console.log(res.data.data)
        console.log("Removed");
      }).catch((err) => {
        console.log(err)
      });
    }
  }

  return (
    <Box
      p={2}
      sx={{
        marginTop: "3px",
      }}
    >
      <Container maxWidth="lg">
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
                sx={{
                  width: "100%",
                }}>
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "70%",
                      md: "70%",
                      lg: "70%",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                  }}>
                  <Stack spacing={1} direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }} >
                    <Typography variant="body1"
                      sx={{
                        fontWeight: "700",
                        fontSize: {
                          xs: "20px",
                          sm: "20px",
                          md: "1.7rem",
                          lg: "1.7rem",
                        },
                      }}>
                      {
                        listing.property_title
                      }
                    </Typography>
                    {
                      isVerified === 1 ? (
                        <CheckCircle sx={{
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "1.7rem",
                            lg: "1.7rem",
                          },
                          color: "#FF5F05",
                          marginLeft: "10"
                        }} />
                      ) : null
                    }
                  </Stack>

                  {/* Save button */}
                  <Button
                    size="small"
                    onClick={() => saveFavorite(listing.id)}
                    variant="contained"
                    startIcon={checked ? <Favorite /> : <FavoriteBorder />}
                    disableFocusRipple={true}
                    disableRipple={true}
                    disableElevation={true}
                    sx={{
                      height: {
                        xs: "30px",
                        sm: "30px",
                        md: "30px",
                        lg: "30px",
                      },
                      backgroundColor: "#000000",
                      borderRadius: "20px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#000000",
                      },
                    }}
                  >
                    <Typography variant="body1">Save</Typography>
                  </Button>
                </Box>
              </Box>

              {/* content */}
              <Box
                mt={2}
                sx={{
                  width: "100%",
                  display: "flex",
                  jsutifyContent: "space-between",
                }}>

                {/* Details */}
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "70%",
                      md: "70%",
                      lg: "70%",
                    },
                    display: "flex",

                    flexDirection: "column",
                  }}>
                  {/* Images */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    {/* main image */}
                    <Box
                      sx={{
                        width: "100%",
                        height: {
                          xs: "250px",
                          sm: "350px",
                          md: "450px",
                          lg: "450px",
                        },
                        margin: "0 auto",
                        borderRadius: "10px",
                      }}>
                      <img src={selectedImg} alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                        }} />
                    </Box>

                    {/* Other images */}
                    <Box
                      mt={1}
                      sx={{
                        width: "100%",
                        display: "flex",
                        height: {
                          xs: "80px",
                          sm: "110px",
                          md: "130px",
                          lg: "130px",
                        },
                        justifyContent: "center",
                        alignItems: "center",
                      }}>

                      {/* Prev slider button */}

                      <IconButton
                        size="small"
                        disableRipple={true}
                        aria-label="previous"
                        onClick={() => imgslider.current.slickPrev()}
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


                      <Box
                        sx={{
                          width: "100%",
                          height: "auto",
                          overflow: "hidden",
                        }}>

                        {/* Other images */}
                        <Slider ref={imgslider} {...imgsettings}>
                          {
                            imgs.map((img, index) => (
                              <Box
                                key={index}
                                sx={{
                                  width: "100%",
                                  height: {
                                    xs: "80px",
                                    sm: "110px",
                                    md: "130px",
                                    lg: "130px",
                                  },
                                  padding: "5px 10px",

                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                                onClick={() => {
                                  setSelectedImg(img);
                                }}
                              >
                                <img src={img} alt=""
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                  }} />
                              </Box>
                            ))
                          }

                        </Slider>
                      </Box>
                      {/* Prev slider button */}
                      <IconButton
                        size="small"
                        disableRipple={true}
                        aria-label="next"
                        onClick={() => imgslider.current.slickNext()}
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
                  </Box>


                  {/* Details */}
                  <Box
                    mt={2}
                    sx={{
                      width: "100%",
                      height: "auto"
                    }}>
                    <Typography variant="body1"
                      sx={{
                        fontWeight: "600",
                        fontSize: "1.2rem",
                      }}>
                      Location: {listing.location}
                    </Typography>


                    {/* Bedrooms bathrooms and others */}
                    <Box
                      mt={1}
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "100%",
                          md: "80%",
                          lg: "80%",
                        },
                      }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                          <Typography variant="body1"
                            sx={{
                              fontSize: "14px",
                            }}>Bedrooms: {listing.number_of_bedrooms}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                          <Typography variant="body1"
                            sx={{
                              fontSize: "14px",
                            }}
                          >Bathrooms: {listing.number_of_bathrooms}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                          <Typography variant="body1"
                            sx={{
                              fontSize: "14px",
                            }}
                          >Toilets: {listing.number_of_toilets}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                          {
                            hasKitchen === 1 ?
                              (
                                <Typography variant="body1"
                                  sx={{
                                    fontSize: "14px",
                                  }}
                                >Kitchen: {listing.number_of_bathrooms}</Typography>
                              ) : null
                          }
                        </Grid>
                      </Grid>
                    </Box>
                    <Divider
                      sx={{
                        marginTop: "7px"
                      }}
                    />

                    {/* Furnished with */}
                    <Box
                      mt={1}
                      sx={{
                        width: "100%",
                        height: "auto"
                      }}>
                      <Typography variant="body1"
                        sx={{
                          fontWeight: "600",
                          fontSize: "1.2rem",
                        }}>
                        Furnished with
                      </Typography>
                      <Box
                        mt={1}
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "80%",
                            lg: "80%",
                          },
                        }}
                      >
                        {
                          isFurnished ? (
                            <Grid container spacing={1}>
                              <Grid item xs={6} sm={6} md={3} lg={3}>
                                <Typography variant="body1"
                                  sx={{
                                    fontSize: "14px",
                                  }}
                                >Bed</Typography>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3} lg={3}>
                                <Typography variant="body1"
                                  sx={{
                                    fontSize: "14px",

                                  }}
                                >Television</Typography>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3} lg={3}>
                                <Typography variant="body1"
                                  sx={{
                                    fontSize: "14px",

                                  }}
                                >Chairs</Typography>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3} lg={3}>
                                <Typography variant="body1"
                                  sx={{
                                    fontSize: "14px",

                                  }}
                                >Fridge</Typography>
                              </Grid>
                            </Grid>
                          ) : (
                            <Typography variant="body1"
                              sx={{
                                fontSize: "14px",
                              }}
                            >
                              Not Furnished
                            </Typography>
                          )
                        }

                      </Box>

                    </Box>
                    <Divider
                      sx={{
                        marginTop: "7px"
                      }}
                    />

                    {/* Utilities Included */}
                    <Box
                      mt={1}
                      sx={{
                        width: "100%",
                        height: "auto"
                      }}>
                      <Typography variant="body1"
                        sx={{
                          fontWeight: "600",
                          fontSize: "1.2rem",
                        }}>
                        Utilities Included
                      </Typography>
                      <Box
                        mt={1}
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "80%",
                            lg: "80%",
                          },
                        }}
                      >

                        {
                          hasWater === 1 ? (
                            <Typography variant="body1"
                              sx={{
                                fontSize: "14px",
                              }}
                            >
                              Water
                            </Typography>
                          ) : (
                            <Typography variant="body1"
                              sx={{
                                fontSize: "14px",
                              }}
                            >
                              No Water
                            </Typography>
                          )
                        }

                        {
                          hasElectricity === 1 ? (
                            <Typography variant="body1"
                              sx={{
                                fontSize: "14px",
                              }}
                            >
                              Electricity
                            </Typography>) : (
                            <Typography variant="body1"
                              sx={{
                                fontSize: "14px",
                              }}
                            >
                              No Electricity
                            </Typography>
                          )
                        }

                      </Box>
                    </Box>
                    <Divider
                      sx={{
                        marginTop: "7px"
                      }}
                    />

                    {/* Property description */}
                    <Box
                      mt={1}
                      sx={{
                        width: "100%",
                        height: "auto"
                      }}>

                      <Typography variant="body1"
                        sx={{
                          fontWeight: "600",
                          fontSize: "1.2rem",
                        }}>
                        Property Description
                      </Typography>

                      <Box
                        mt={1}
                        sx={{
                          width: "100%",
                          height: "auto"
                        }}
                      >
                        <Typography variant="body1"
                          sx={{
                            fontSize: "14px"
                          }}>
                          {listing.full_property_description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>





                {/*Right Sidebar */}
                <Box sx={{
                  width: {
                    sm: "40%",
                    md: "30%",
                    lg: "30%",
                  },
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                  },
                  height: "auto",
                  padding: "0 2rem",

                }}>

                  <Paper
                    elevation={2}
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      flexDirection: "column",
                      // borderRadius: "14px",
                      backgroundColor: "#35BF43",
                      borderRadius: "14px 14px 8px 8px",
                      alignItems: "center",
                      justifyContent: "flex-end"
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent: "space-between",
                        padding: {
                          sm: "1rem 0.8rem",
                          md: "1rem 2rem",
                          lg: "1rem 2rem",
                        },
                        alignItems: "center",
                        borderRadius: "8px",
                        backgroundColor: "#FFFFFF",
                        marginTop: "5px",
                      }}>
                      <Typography variant="body1"
                        sx={{
                          fontWeight: "600",
                          fontSize: "1.2rem",
                        }}>GHC{listing.amount}</Typography>
                      <Divider sx={{
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#35BF43",
                        marginTop: "0.4rem",
                      }} />

                      {/* Listed by */}
                      <Box
                        sx={{
                          width: "100%",
                          height: "auto",
                          display: "flex",
                          alignItems: "center",
                          marginTop: "0.5rem"
                        }}>
                        <Avatar
                          src=""
                          alt=""
                          size="small"
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "0.5rem",
                          }}>
                          <Typography variant="body1"
                            sx={{
                              fontSize: "14px",
                            }}>Listed by</Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}>
                            <Typography variant="body1"
                              sx={{
                                fontSize: "14px",
                              }}>{name}</Typography>
                            <CheckCircle sx={{
                              fontSize: "18px",
                              marginLeft: "0.4rem",
                              color: "#4285F4",
                            }} />
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        mt={2}
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        <Typography variant="body1"
                          align="center"
                          sx={{
                            fontWeight: "550",
                            fontSize: {
                              sm: "14px",
                              md: "14px",
                              lg: "14px",
                            },
                            lineHeight: "18px"
                          }}>
                          Interested in this Listing? Schedule an inspection.
                        </Typography>
                      </Box>

                      {/* Type of inspection */}
                      <Box
                        mt={1}
                        sx={{
                          width: "100%",
                        }}>
                        <Typography variant="body1"
                          sx={{
                            fontWeight: "550",
                            fontSize: {
                              sm: "14px",
                              md: "14px",
                              lg: "14px",
                            },

                          }}>
                          Type of inspection
                        </Typography>
                        <TextField
                          color="success"
                          select
                          fullWidth={true}
                          size="small"
                          value={inspectionType}
                          onChange={handleChange}
                          sx={{
                            marginTop: "3px"
                          }}
                        >
                          <MenuItem value="Physical">Physical</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                      </Box>

                      {/* Date */}
                      <Box
                        mt={1}
                        sx={{
                          width: "100%",
                        }}
                      >
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
                          Inspection Date
                        </Typography>

                        <TextField
                          color="success"
                          fullWidth={true}
                          size="small"
                          type="date"
                          sx={{
                            marginTop: "3px"
                          }}
                        />
                        <Button
                          fullWidth={true}
                          variant="contained"
                          sx={{
                            backgroundColor: "#35BF43",
                            marginTop: "1rem",
                            "&:hover": {
                              backgroundColor: "#35BF43",
                            }
                          }}>
                          <Typography variant="body1"
                            sx={{
                              textTransform: "none",
                              fontSize: {
                                sm: "14px",
                                md: "14px",
                                lg: "14px",
                              },
                            }}
                          >Book Inspection</Typography>
                        </Button>
                      </Box>
                    </Box>
                  </Paper>

                  {/* Apply now */}
                  <Paper

                    elevation={2}
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      flexDirection: "column",
                      // borderRadius: "14px",
                      backgroundColor: "#35BF43",
                      borderRadius: "14px 14px 8px 8px",
                      marginTop: "1.5rem",

                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent: "space-between",
                        padding: {
                          sm: "1rem 0.8rem",
                          md: "1rem 2rem",
                          lg: "1rem 2rem",
                        },
                        alignItems: "center",
                        borderRadius: "8px",
                        backgroundColor: "#FFFFFF",
                        marginTop: "5px",
                      }}>

                      <Box
                        mt={1}
                        sx={{
                          width: "100%",
                          display: "flex",
                        }}>
                        <Typography variant="body1"
                          align="center"
                          sx={{
                            fontWeight: "550",
                            fontSize: {
                              sm: "14px",
                              md: "14px",
                              lg: "14px",
                            },
                            lineHeight: "18px"
                          }}>
                          Like this Listing? Secure this home by sending your application today!
                        </Typography>
                      </Box>

                      {/* Date */}
                      <Box
                        mt={1}
                        sx={{
                          width: "100%",
                        }}
                      >
                        <Button
                          fullWidth={true}
                          onClick={handleOpenApply}
                          variant="contained"
                          sx={{
                            backgroundColor: "#35BF43",
                            marginTop: "1rem",
                            "&:hover": {
                              backgroundColor: "#35BF43",
                            }
                          }}>
                          <Typography variant="body1"
                            sx={{
                              textTransform: "none",
                              fontSize: {
                                sm: "14px",
                                md: "14px",
                                lg: "14px",
                              },
                            }}
                          >Apply now</Typography>
                        </Button>
                      </Box>
                    </Box>
                  </Paper>

                </Box>
              </Box>




              {/* Similar Listings */}
              <Box
                mt={3}
                sx={{
                  width: "100%",
                  height: "auto",
                }}>
                <Typography variant="body1"
                  sx={{
                    color: "#35BF43",
                    fontWeight: "700",
                    fontSize: {
                      xs: "20px",
                      sm: "20px",
                      md: "1.7rem",
                      lg: "1.7rem",
                    },
                  }}>Similar Listings</Typography>

                {
                  similarLoading ? (
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
                    <Box
                      mt={2}
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}>
                      <IconButton
                        size="small"
                        disableRipple={true}
                        aria-label="next"
                        onClick={() => sliderRef.current.slickPrev()}
                        edge="end"
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
                      <Box
                        sx={{
                          width: "100%",
                          height: "auto",
                          overflow: "hidden",
                        }}>
                        <Slider ref={sliderRef} {...settings}>
                          {
                            similarListing.map((similar, index) => (
                              <SimilarListings
                                key={index}
                                image={similar.image}
                                image1={similar.image}
                                image2={similar.image}
                                image3={similar.image}
                                image4={similar.image}
                                id={similar.id}
                                showTag={showTag}
                                amount={similar.amount}
                                property_type={similar.property_type.type}
                                number_of_bathrooms={similar.number_of_bathrooms}
                                number_of_bedrooms={similar.number_of_bedrooms}
                                location={similar.location}
                                region={similar.region}
                              />
                            ))
                          }

                        </Slider>
                      </Box>
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
                  )
                }
              </Box>
            </>
          )
        }
      </Container>
      <ApplyListings openAlert={openApply} handleClose={handleClose} id={listing.id} />
    </Box>
  );
};

export default Details;
