import React, { useRef } from "react";
import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ReviewsCard from "../ReviewsCard";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img4 from "../../img/img4.jpg";
import Slider from "react-slick/lib/slider";

const Reviews = ({ reviews }) => {
  const sliderRef = useRef(null);
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

  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem",
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
            Reviews
          </Typography>
          <Box mt={1}>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                  md: "18px",
                  lg: "18px",
                },
                fontWeight: "400",
                color: "#000",
              }}
            >
              Hear from some of our tenants and landlords.
            </Typography>
          </Box>

          {/* Reviews card */}
          <Box
            mt={2}
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                size="small"
                disableRipple={true}
                aria-label="previous"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <ChevronLeft
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "1.5rem",
                      md: "2rem",
                      lg: "2rem",
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
                  // paddingBottom:"10px",
                  overflow: "hidden",
                }}
              >
                <Slider ref={sliderRef} {...settings}>
                  <ReviewsCard
                    img={img1}
                    name="Francis Quartey"
                    title="Tenant"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit."
                  />

                  <ReviewsCard
                    img={img2}
                    name="Francis Quartey"
                    title="Tenant"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit."
                  />

                  <ReviewsCard
                    img={img4}
                    name="Francis Quartey"
                    title="Tenant"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit."
                  />

                  <ReviewsCard
                    img={img4}
                    name="Francis Quartey"
                    title="Tenant"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit."
                  />

                  <ReviewsCard
                    img={img4}
                    name="Francis Quartey"
                    title="Tenant"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit."
                  />
                </Slider>
              </Box>
              {/* Slider content */}
              <IconButton
                size="small"
                disableRipple={true}
                aria-label="next"
                onClick={() => sliderRef.current.slickNext()}
              >
                <ChevronRight
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "1.5rem",
                      md: "2rem",
                      lg: "2rem",
                    },
                    color: "#000",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Reviews;



 