import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const RegSuccess = () => {
  const { successmessage, email } = useParams();
  const { setUser, setShowNav } = useContext(UserContext);

  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // const email = localStorage.getItem("user-info.email");
  const backendurl = process.env.REACT_APP_BACKEND_URL;

  const user = JSON.parse(localStorage.getItem("user-info"));

  useEffect(() => {
    setShowNav(false);
  }, []);

  const authAxios = Axios.create({
    baseURL: backendurl,
    headers: {
      Authorization: "Bearer " + user.access_token,
    },
  });

  const ResendLink = () => {
    authAxios
      .post(`/api/email/verify/resend`, {
        email: email,
      })
      .then((res) => {
        setMessage(res.data.data);
        setLoading(false);
        setDisabled(true);
        setAlertType("success");
        setAlert(true);
      })
      .catch((err) => {
        console.log(err);
        setAlert(false);
        setDisabled(false);
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
          <Typography variant="body1">Didn't recieve link?</Typography>
          <Button
            onClick={ResendLink}
            sx={{
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            disabled={loading ? true : disabled ? true : false}
          >
            {loading ? (
              <CircularProgress
                size={23}
                sx={{
                  color: "#07A804",
                }}
              />
            ) : (
              <Typography
                variant="body1"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#07A804",
                }}
              >
                Resend Link
              </Typography>
            )}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default RegSuccess;
