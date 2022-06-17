import { Box, Paper, Typography, Stack, Avatar } from "@mui/material";
import React from "react";

const ReviewsCard = (props) => {
  return (
    <Box
      sx={{
        padding: "2px",
      }}
    >
      <Paper
        elevation={0}
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* Image */}
        <Avatar
          alt="Francis"
          src={props.img}
          sx={{ width: 100, height: 100 }}
        />
        <Stack mt={1} spacing={0} align="center">
          <Typography
            variant="body1"
            sx={{
              fontWeight: "700",
              color: "#35BF43",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "16px",
                lg: "16px",
              },
              fontStyle: "normal",
            }}
          >
            {props.name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "700",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "16px",
                lg: "16px",
              },
              fontStyle: "normal",
            }}
          >
            {props.title}
          </Typography>
        </Stack>
        <Box mt={1}>
          <Typography
            variant="body2"
            center="center"
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              color: "#263238",
            }}
          >
            {props.description}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ReviewsCard;
