import { Alert, Button, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Axios } from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Verify = () => {
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const backendurl = "";

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
            Your account is successfully verified.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: "16px",
            }}
          >
            Please login into your account
          </Typography>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "#07A804",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Login
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Verify;
