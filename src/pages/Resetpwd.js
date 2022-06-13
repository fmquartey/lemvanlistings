import {
  Box,
  Typography,
  TextField,
  Stack,
  Button,
  Paper,
  Container,
  Alert,
  CircularProgress,
} from "@mui/material";
import Axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Resetpwd = () => {
  const { token, email } = useParams();
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alertType, setAlertType] = useState("");
  const backendurl = "https://b754-154-160-17-215.ngrok.io";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (password === "" || password_confirmation === "") {
      setError(true);
    } else {
      if (password !== password_confirmation) {
        setAlert(true);
        setAlertType("error");
        setMessage("Passwords do not match");
      } else {
        setLoading(true);
        setAlert(false);
        e.preventDefault();
        Axios.post(`${backendurl}/api/users/password/reset`, {
          token: token,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        })
          .then((res) => {
            // setAlert(true);
            // setAlertType("success");
            // console.log(res.data.data);
            // setMessage(res.data.data);
            setLoading(false);
            setPassword("");
            setConfirmPassword("");
            navigate(`/resetpassword/${res.data.data}`);
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      }
    }
  };

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            marginTop: "2rem",
            width: {
              xs: "100%",
              sm: "400px",
              md: "400px",
              lg: "400px",
            },
            padding: {
              xs: "10px",
              sm: "30px",
              md: "1rem 1.5rem",
              lg: "1.5rem 1.5rem",
            },
          }}
          align="center"
          elevation={2}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
              paddingTop: "10px",
            }}
          >
            <Typography variant="h5">Set new password</Typography>
          </Box>
          <Box
            sx={{
              marginBottom: "15px",
            }}
          >
            {!alert ? null : (
              <Alert severity={alertType}>
                <Typography variant="body1">{message}</Typography>
              </Alert>
            )}
          </Box>
          <Box
            sx={{
              
              marginBottom: "20px",
              
            }}
          >
            <Typography variant="body1">
              Enter your prefered password to set a new password
            </Typography>
          </Box>
          <Stack mt={2}>
            <TextField
              size="small"
              error={error && password === "" ? true : false}
              fullWidth={true}
              placeholder="New password"
              sx={{
                marginBottom: "15px",
              }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              helperText={
                error && password === "" ? "This field is required" : ""
              }
              required
            />
            <TextField
              size="small"
              error={error && password_confirmation === "" ? true : false}
              fullWidth={true}
              placeholder="Confirm new password"
              sx={{
                marginBottom: "15px",
              }}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={password_confirmation}
              helperText={
                error && password_confirmation === ""
                  ? "This field is required"
                  : ""
              }
              required
            />
            <Button
              variant="contained"
              fullWidth={true}
              onClick={handleSubmit}
              sx={{
                textTransform: "none",
                backgroundColor: "#000000",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#000000",
                },
                marginBottom: "15px",
              }}
              disabled={loading ? true : false}
            >
              {loading ? (
                <CircularProgress size={30} color="success" />
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "none",
                  }}
                >
                  Submit
                </Typography>
              )}
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Resetpwd;

// "email";
// password_confirmation;
// "password";
