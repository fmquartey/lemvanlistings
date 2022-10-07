import { Alert, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { apilink } from "../Helper";

const Verify = () => {
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [loading, setLoading] = useState(false);
  const { id, hash } = useParams();
  const location = useLocation();
  const urlSearch = location.search;
  const navigate = useNavigate();

  const redirect = () => {
    setTimeout(() => {
       navigate("/login");
    }, 5000);
  }
   
  const verify = () => {
    console.log(`${apilink}/api/email/verify/${id}/${hash}${urlSearch}`);
    setLoading(true);
    Axios.get(`${apilink}/api/email/verify/${id}/${hash}${urlSearch}`)
      .then((res) => {
        setLoading(false);
        // console.log(res.data);
        setAlertType("success");
        setMessage("Verification Successful");
        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    verify();
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
          {loading ? (
            <Typography variant="body1">
              Your account is being verified. Please wait
            </Typography>
          ) : (
            <Alert severity={alertType}>
              <Typography variant="body1">{message}</Typography>
            </Alert>
          )}
          {
            loading ? null : (
            <Typography variant="body1">
              Redirecting you to the login page in 5 seconds
            </Typography>
            )
          }
        </Stack>
      </Container>
    </Box>
  );
};

export default Verify;
