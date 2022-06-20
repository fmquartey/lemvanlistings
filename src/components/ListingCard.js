import { CheckCircle, ChevronLeft, ChevronRight, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Paper, Typography, Stack, IconButton, Checkbox, Chip } from "@mui/material";
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
            xs: "140px",
            sm: "100%",
            md: "90%",
            lg: "270px",
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
              xs: "95px",
              sm: "140px",
              md: "110px",
              lg: "180px",
            },
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            <Link
              style={{
                textDecoration: "none",
                color: "#000000",
              }}
              to={`/listing/${props.id}`}
            >
              <img
                src={props.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  backgroundSize: "cover",
                }}
              />
            </Link>

            {props.image1 ? (
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
                to={`/listing/${props.id}`}
              >
                <img
                  src={props.image1}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",

                    backgroundSize: "cover",

                  }}
                />
              </Link>

            ) : null}
            {props.image2 ? (
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
                to={`/listing/${props.id}`}
              >
                <img
                  src={props.image2}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    backgroundSize: "cover",
                  }}
                />
              </Link>

            ) : null}
            {props.image3 ? (
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
                to={`/listing/${props.id}`}
              >
                <img
                  src={props.image3}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    backgroundSize: "cover",

                  }}
                />
              </Link>

            ) : null}
            {props.image4 ? (
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
                to={`/listing/${props.id}`}
              >
                <img
                  src={props.image4}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    backgroundSize: "cover",
                  }}
                />
              </Link>

            ) : null}
          </Slider>
          {/* Slider prev button*/}
          <IconButton
            size="small"
            disableRipple={true}
            aria-label="previous"
            sx={{
              position: "absolute",
              top: {
                xs: "30%",
                sm: "40%",
                md: "30%",
                lg: "35%",
              },
              zIndex: "1",
            }}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <ChevronLeft
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2rem",
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
              top: {
                xs: "30%",
                sm: "40%",
                md: "30%",
                lg: "35%",
              },
              right: "0",
              zIndex: "1",
            }}
            onClick={() => sliderRef.current.slickNext()}
          >
            <ChevronRight
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "2.5rem",
                },
                color: "#fff",
              }}
            />
          </IconButton>
          {
            props.showTag ? (
              <Checkbox
                sx={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  zIndex: "3",
                }}
                icon={<FavoriteBorder
                  sx={{
                    color: "#fff",
                  }}
                />}
                checkedIcon={<Favorite sx={{
                  color: "#FF5F05"
                }} />}
              />
            ) : null
          }

          {/* Verified tag */}
          {
            props.showTag ? (
              <Box
                sx={{
                  position: "absolute",
                  bottom: "5px",
                  right: "4px",
                  padding: {
                    xs: "2px 4px",
                    sm: "2px 4px",
                    md: "5px 8px",
                    lg: "5px 8px",
                  },
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FF5F05",
                }}>
                <CheckCircle sx={{
                  fontSize: "16px",
                  color: "#fff",
                }} />
                <Typography variant="body1"
                  sx={{
                    fontSize: "12px",
                    color: "#fff",
                  }}>
                  Verified
                </Typography>
              </Box>
            ) : null
          }
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
            <Box sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              flexDirection: "column",
            }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "18px",
                      md: "16px",
                      lg: "17px",
                    },
                    color: "#000000",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                >
                  {props.amount} / {props.period}
                </Typography>
              </Box>
              <Stack spacing={0}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "18px",
                      md: "16px",
                      lg: "17px",
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
                      xs: "12px",
                      sm: "18px",
                      md: "16px",
                      lg: "17px",
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
                      xs: "12px",
                      sm: "18px",
                      md: "16px",
                      lg: "17px",
                    },
                    color: "#000000",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                >
                  {props.region}
                </Typography>
              </Stack>
            </Box>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default ListingCard;
