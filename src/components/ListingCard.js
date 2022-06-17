import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Paper, Typography, Stack, IconButton } from "@mui/material";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ListingCard = (props) => {
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
  };

  return (
    <Box
      key={props.key}
      sx={{
        padding: "2px",
      }}
    >
      <Paper
        elevation={1}
        sx={{
          margin: {
            xs: "0",
            sm: "10px",
            md: "15px",
            lg: "15px",
          },
          width: {
            xs: "100%",
            sm: "90%",
            md: "90%",
            lg: "320px",
          },
          height: "auto",
          borderRadius: "10px",
        }}
      >
        {/* Image slider */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {
              xs: "120px",
              sm: "180px",
              md: "180px",
              lg: "180px",
            },
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            <img
              src={props.image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
            />
            {props.image1 ? (
              <img
                src={props.image1}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            ) : null}
            {props.image2 ? (
              <img
                src={props.image2}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            ) : null}
            {props.image3 ? (
              <img
                src={props.image3}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            ) : null}
            {props.image4 ? (
              <img
                src={props.image4}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            ) : null}
          </Slider>
          {/* Slider prev button*/}
          <IconButton
            size="small"
            disableRipple={true}
            aria-label="previous"
            sx={{
              position: "absolute",
              top: "40%",
              zIndex: "1",
            }}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <ChevronLeft
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "2.5rem",
                  md: "2.5rem",
                  lg: "2.5rem",
                },

                color: "#fff",
              }}
            />
          </IconButton>
          {/* Slider next button*/}
          <IconButton
            size="small"
            disableRipple={true}
            aria-label="next"
            sx={{
              position: "absolute",
              top: "40%",
              right: "0",
              zIndex: "1",
            }}
            onClick={() => sliderRef.current.slickNext()}
          >
            <ChevronRight
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "2.5rem",
                  md: "2.5rem",
                  lg: "2.5rem",
                },
                color: "#fff",
              }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            padding: "10px",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "#000000",
            }}
            to={`/listing/${props.id}`}
          >
            <Stack spacing={0}>
              <Stack spacing={1}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    },
                    color: "#000000",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                >
                  {props.amount}
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    },
                    color: "#000000",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                >
                  {props.property_type +
                    " | " +
                    props.number_of_bedrooms +
                    " Bed | " +
                    props.number_of_bathrooms +
                    " Bath"}
                </Typography>
              </Stack>
              <Stack spacing={0}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    },
                    color: "#000000",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                >
                  {props.location + ","}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    },
                    color: "#000000",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                >
                  {props.region}
                </Typography>
              </Stack>
            </Stack>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default ListingCard;
