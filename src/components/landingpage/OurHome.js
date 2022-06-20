import {
  ChevronLeft,
  ChevronRight,
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
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick/lib/slider";
import ListingCard from "../ListingCard";
import Axios from "axios";
import ListingSkeleton from "../ListingSkeleton";
import hse1 from "../.././img/hse1.jpg";
import hse2 from "../.././img/hse2.jpg";
import hse3 from "../.././img/hse3.jpg";
import hse4 from "../.././img/hse4.jpg";
import hse5 from "../.././img/hse5.jpg";

const OurHome = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const backendurl = process.env.REACT_APP_BACKEND_URL;
  const sliderRef = useRef(null);
  const [showTag, setShowTag] = useState(false);


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
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

  const getListings = () => {
    setLoading(true);
    Axios.get(`${backendurl}/api/index/page`)
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
                    {listings.map((listing) => (
                      <ListingCard
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
                    ))}
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
      </Container>
    </Box>
  );
};

export default OurHome;
