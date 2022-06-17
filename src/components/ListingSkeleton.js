import { Box, Paper, Skeleton, Stack } from "@mui/material";
import React from "react";

const ListingSkeleton = (props) => {
  return (
    <Box
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
        <Box
          sx={{
            width: "100%",
            height: {
              xs: "120px",
              sm: "200px",
              md: "180px",
              lg: "180px",
            },
          }}
        >
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="100%"
            height="100%"
            sx={{
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
              <Skeleton variant="text" animation="wave" />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="text" animation="wave" />
            </Stack>
            <Stack spacing={0}>
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" />
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default ListingSkeleton;
