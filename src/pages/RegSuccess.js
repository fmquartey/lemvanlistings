import { Alert, Button, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const RegSuccess = () => {
  const { successmessage,email } = useParams();

  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  // const email = localStorage.getItem("user-info.email");
  const backendurl = "https://b754-154-160-17-215.ngrok.io";
  const user = JSON.parse(localStorage.getItem("user-info"));

  const headers = {
    accept: "application/json",
    Authorization: "Bearer " + user.access_token,
  };

  const ResendLink = () => {
    const data = { email: email };
    Axios.post(`${backendurl}/api/email/verify/resend`, {
      headers: headers,
      data,
    })
      .then((res) => {
        console.log(res.data.data);
        setMessage(res.data.message);
        console.log(email);
        setAlertType("success");
        setAlert(true);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err}`)
        }
        setAlert(false);
      });
  };

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
          <Box>
            {!alert ? null : (
              <Alert severity={alertType}>
                <Typography variant="body1">{message}</Typography>
              </Alert>
            )}
          </Box>

          <Typography variant="body1">{successmessage}</Typography>
          <Typography variant="body1">Didn't recieve Email?</Typography>
          <Button
            sx={{
              textTransform: "none",
              color: "#07A804",
            }}
            onClick={ResendLink}
          >
            Resend
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default RegSuccess;
