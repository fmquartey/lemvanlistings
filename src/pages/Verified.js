import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Axios from "axios";
// import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";

const Verified = () => {
  const location = useLocation();  
  const backendurl = "https://b754-154-160-17-215.ngrok.io";
  const googleurl = location.search;

  // User is verified
  const Verify = () => {
    Axios.get(`${backendurl}/api/google/auth/callback/1${googleurl}`)
      .then((res) => {
        // console.log(res.data);
        // setUserData(res.data);
        localStorage.setItem("user-info", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Verify();
    // console.log(backendurl + googleurl);
  }, []);

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={1}
          sx={{
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: "16px",
            }}
          >
            Your account have successfully been verified.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: "16px",
            }}
          >
            Please login into your account
          </Typography>
          <Button sx={{
            textTransform: "none",
          }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "16px",
              }}
            >
              Login
            </Typography>
          </Button> 
        </Stack>
      </Container>
    </Box>
  );
};

export default Verified;
