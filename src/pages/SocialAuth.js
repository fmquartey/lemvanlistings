import { Box, Container, Stack, Typography } from '@mui/material';
import Axios from "axios";
// import axios from "axios";
import React, { useEffect, useContext } from "react";
import {
  useLocation, useNavigate,
} from "react-router-dom";
import { UserContext } from '../context/UserContext';


const SocialAuth = () => {
  const location = useLocation();
  const backendurl = process.env.REACT_APP_BACKEND_URL;
  const googleurl = location.search;
  const facebookurl = location.search;

  const navigate = useNavigate();
const { setUser } = useContext(UserContext);

  // redirect to listing in 5 seconds
  const redirect = () => {
      setTimeout(() => {
        setUser(true);
        navigate("/listing");
    }, 5000);
    };
    

  // User is verified
    const Verify = () => {
      Axios.get(`${backendurl}/api/google/auth/callback/1${googleurl}`)
        .then((res) => {
            localStorage.setItem("user-info", JSON.stringify(res.data.data));
            redirect();
        })
        .catch((err) => {
          console.log(err);
        });
  };
  
  // const Facebook = () => {
  //   Axios.get(`${backendurl}/api/facebook/auth/callback/1${facebookurl}`)
  //     .then((res) => {
  //       localStorage.setItem("user-info", JSON.stringify(res.data.data));
  //       redirect();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
    

  useEffect(() => {
    Verify();
    // Facebook();
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
            Redirecting please wait...
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default SocialAuth;
