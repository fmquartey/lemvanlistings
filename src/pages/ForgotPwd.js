import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPwd = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [login, setLogin] = useState("");
  const backendurl = "https://b754-154-160-17-215.ngrok.io";

  // handle forgot password form submit
  const handleForgotPassword = (e) => {
    if (email === "") {
      //   setAlert(true);
      setError(true);
    } else {
      setLoading(true);
      e.preventDefault();
      Axios.post(`${backendurl}/api/users/password/forgot`, {
        email: email,
      }).then((res) => {
        setAlert(true);
        setLoading(false);
        setAlertType("success");
        setMessage(res.data.data);
        setEmail("");
      }).catch((err) => {
        setLoading(false);
        console.log(err)
      })
    }
  };
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: {
            xs: "95%",
            sm: "350px",
            md: "350px",
            lg: "350px",
          },
          padding: {
            xs: "10px",
            sm: "30px",
            md: "1rem 1.5rem",
            lg: "1.5rem 1.5rem",
          },
        }}
        align="center"
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
          <Typography variant="h5">Reset password</Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              marginBottom: "20px",
            }}
          >
            <Box>
              {!alert ? null : (
                <Alert severity="success">
                  <Typography variant="body1">{message}</Typography>
                </Alert>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              marginBottom: "20px",
            }}
          >
            <Typography variant="body1">
              Enter your email address below and we will send you instructions
              for setting up a new password.
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: "20px",
            }}
          >
            <TextField
              error={error && email === "" ? true : false}
              type="email"
              size="small"
              value={email}
              fullWidth={true}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                radius: "10px",
                marginBottom: "20px",
                "&.Mui-focused fieldset": {
                  backgroundColor: "#07A804",
                },
              }}
              required
              helperText={error && email === "" ? "This field is equired" : ""}
            />
            <Button
              onClick={handleForgotPassword}
              variant="contained"
              fullWidth={true}
              sx={{
                textTransform: "none",
                backgroundColor: "#000000",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#000000",
                },
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
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "15px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                marginRight: "5px",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Remember password?
            </Typography>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#07A804",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Log in
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ForgotPwd;
