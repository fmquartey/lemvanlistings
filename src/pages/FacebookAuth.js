import { Box, Container, Stack, Typography } from "@mui/material";
import Axios from "axios";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { apilink } from "../Helper";


const FacebookAuth = () => {
  const location = useLocation();
  const facebookurl = location.search;
  const navigate = useNavigate();
  const { setUser, setShowNav } = useContext(UserContext);

  const redirect = () => {
    setTimeout(() => {
      setUser(true);
      navigate("/");
    }, 5000);
  };
  const Facebook = () => {
    Axios.get(`${apilink}/api/facebook/auth/callback/1${facebookurl}`)
      .then((res) => {
        localStorage.setItem("user-info", JSON.stringify(res.data.data));
        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setShowNav(false);

    Facebook();
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
};

export default FacebookAuth;
