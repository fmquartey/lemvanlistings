import { Box, Paper, Typography, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";



const ListingCard = (props) => {
  return (
    <Box
      key={props.key}
      sx={{
        padding: "3px",
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
        <Link
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
          to={`/listing/${props.id}`}
        >
          <Box
            sx={{
              width: "100%",
              height: {
                xs: "120px",
                sm: "200px",
                md: "200px",
                lg: "200px",
              },
            }}
          >
            <img
              src="https://media.istockphoto.com/photos/independence-arch-picture-id453437701?k=20&m=453437701&s=612x612&w=0&h=CgWGYORfjFrChuwLQLZR8HQm8fYJl34D26ta0exeB58="
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              padding: "10px",
            }}
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
                  {props.location + ", " + props.region}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Link>
      </Paper>
    </Box>
  );
};

export default ListingCard;
