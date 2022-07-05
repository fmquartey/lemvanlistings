import {
  ArrowBack,
  Cancel,
  Close,
  Facebook,
  Google,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import AccountType from "../components/auths/AccountType";
import { apilink } from "../Helper";

const Login = () => {
  const { setUser, setShowNav } = useContext(UserContext);

  useEffect(() => {
    setShowNav(false);
  });

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const backendurl = apilink;

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  // redirect to listing in 5 seconds
  const redirect = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const backArrow = () => {
    setShowNav(true);
    navigate("/welcome");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (login === "" || password === "") {
      setError(true);
    } else {
      setLoading(true);
      setError(false);
      Axios.post(`${backendurl}/api/login`, {
        login: login,
        password: password,
      })
        .then((res) => {
          setLogin("");
          setPassword("");
          setLoading(false);
          setAlertType("success");
          setMessage(res.data.message);
          setAlert(false);
          localStorage.setItem("user-info", JSON.stringify(res.data.data));
          setUser(true);
          redirect();
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response.data.error);
          // console.log(err);
          if (err.response.data.error) {
            setAlert(true);
            setMessage(err.response.data.error);
            setAlertType("error");
          }
        });
    }
  };
  // google sign in
  const handleGoogleSignIn = () => {
    Axios.get(`${backendurl}/api/google/auth/redirect/url`).then((res) => {
      window.open(res.data.data, "_self");
    });
  };

  // google sign in
  const handleFacebookSignIn = () => {
    Axios.get(`${backendurl}/api/facebook/auth/redirect/url`).then((res) => {
      window.open(res.data.data, "_self");
    });
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
          position: "relative",
          width: {
            xs: "95%",
            sm: "400px",
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
        <IconButton
          onClick={backArrow}
          color="inherit"
          sx={{
            position: "absolute",
            top: "8px",
            right: "10px",
          }}
        >
          <Close
            sx={{
              fontSize: "1rem",
            }}
          />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
            paddingTop: "10px",
          }}
        >
          <Typography variant="h5">Login</Typography>
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
            width: "100%",
          }}
        >
          <TextField
            error={error && login === "" ? true : false}
            size="small"
            value={login}
            fullWidth={true}
            placeholder="Email or Phone"
            onChange={(e) => setLogin(e.target.value)}
            sx={{
              radius: "10px",
              marginBottom: "15px",
              "&.Mui-focused fieldset": {
                backgroundColor: "#07A804",
              },
            }}
            type="email"
            required
            helperText={error && login === "" ? "This field is equired" : ""}
          />
          <TextField
            error={error && password === "" ? true : false}
            size="small"
            value={password}
            fullWidth={true}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: "5px" }}
            required
            helperText={error && password === "" ? "This field is equired" : ""}
            type="password"
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              marginBottom: "15px",
            }}
          >
            <Link
              to="/users/password/forgot"
              style={{
                textDecoration: "none",
                color: "#07A804",
                fontSize: "14px",
              }}
            >
              Forgot Password?
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            <Button
              onClick={handleLoginSubmit}
              variant="contained"
              fullWidth={true}
              sx={{
                backgroundColor: "#000000",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#000000",
                },
              }}
              disabled={loading ? true : false}
            >
              {loading ? (
                <CircularProgress size={23} color="success" />
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "none",
                  }}
                >
                  Login
                </Typography>
              )}
            </Button>
          </Box>
          {/* social media */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <Divider
              variant="middle"
              flexItem={true}
              sx={{
                width: "98%",
                height: "10px",
                fontSize: "14px",
              }}
            >
              OR
            </Divider>
          </Box>

          <Stack spacing={2}>
            <Button
              sx={{
                borderRadius: "10px",
                textTransform: "none",
              }}
              variant="contained"
              fullWidth={true}
              startIcon={<Facebook />}
              onClick={handleFacebookSignIn}
            >
              <Typography variant="body1">Sign in with Facebook</Typography>
            </Button>

            <Button
              sx={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                textTransform: "none",
              }}
              color="inherit"
              variant="contained"
              fullWidth={true}
              startIcon={<Google />}
              onClick={handleGoogleSignIn}
            >
              <Typography
                variant="body1"
                sx={{
                  textTransform: "none",
                }}
              >
                Sign in with Google
              </Typography>
            </Button>
          </Stack>
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
              Don't have an account?
            </Typography>
            <Button
              onClick={handleOpen}
              disableRipple={true}
              size="small"
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textDecoration: "none",
                  color: "#07A804",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Sign up
              </Typography>
            </Button>
          </Box>
        </Box>
      </Paper>
      <AccountType open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Login;
