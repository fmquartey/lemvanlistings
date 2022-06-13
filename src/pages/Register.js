import { Facebook, Google } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  // const [account_type, setAccount_type] = useState(1);
  const [accept_terms, setAccept_terms] = useState(1);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const backendurl = "https://b754-154-160-17-215.ngrok.io";
  const navigate = useNavigate();
  const { account_type } = useParams();
  const { setShowNav } = useContext(UserContext);

  useEffect(() => {
    setShowNav(false);
  }, []);

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // I agree to the terms and conditions
  const [termsCheck, settermsCheck] = useState(false);
  const checkedTerms = () => {
    if (termsCheck) {
      // setAccept_terms(1);
      settermsCheck(false);

      console.log(accept_terms);
    } else {
      settermsCheck(true);
      // setAccept_terms(0);
      console.log(accept_terms);
    }
  };

  // validate email
  const validateEmail = (e) => {
    e.preventDefault();
    if (!regex.test(email)) {
      setMessage("Please enter a valid email address");
      setAlert(true);
      setAlertType("error");
    } else {
      setAlert(false);
      setAlertType("success");
      setMessage("");
      return true;
    }
  };

  const TextAccounttype = () => {
  console.log(account_type);
}

  // check if password and confirm password match
  const handleConfirmPassword = (e) => {
    if (password_confirmation !== password) {
      setAlert(true);
      setAlertType("error");
      setAlertMessage("Passwords do not match");
      // console.log("Passwords do not match");
    } else {
      console.log("Passwords match");
    }
  };

  // Register handle
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // check if fields are empty
    if (firstname === "" || phone === "" || email === "" || password === "") {
      setError(true);
      setLoading(false);

      // check if password and confirm password match
    } else if (password_confirmation !== password) {
      setAlert(true);
      setAlertType("error");
      setMessage("Passwords do not match");
      setLoading(false);
    } else if (!regex.test(email)) {
      setAlert(true);
      setAlertType("error");
      setMessage("Please enter a valid email address");
      setLoading(false);
    } else if (password.length !== "") {
      if (password.length < 8) {
        setError(false);
        setAlert(true);
        setMessage("Password must be at least 8 characters");
        setAlertType("error");
        setLoading(false);

        // password must contain a number
      } else if (!/\d/.test(password)) {
        setError(false);
        setAlert(true);
        setMessage("Password must contain a number");
        setAlertType("error");
        setLoading(false);

        // password must contain a capital letter
      } else if (!/[A-Z]/.test(password)) {
        setError(false);
        setAlert(true);
        setMessage("Password must contain a capital letter");
        setAlertType("error");
        setLoading(false);

        // password must contain a special character
      } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        setError(false);
        setAlert(true);
        setLoading(false);

        setMessage("Password must contain a special character");
        setAlertType("error");
      } else {
        setError(false);
        setAlert(false);
        setLoading(true);
        Axios.post(`${backendurl}/api/register`, {
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
          password: password,
          password_confirmation: password_confirmation,
          account_type: account_type,
          accept_terms: accept_terms,
        })
          .then((res) => {
            setLoading(false);
            setMessage(res.data.data.message);
            localStorage.setItem("user-info", JSON.stringify(res.data.data.data));
            setAlertType("success");
            setAlert(true);
            navigate(`/register/${res.data.data.message}/${email}`);
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setAccept_terms(1);
          })
          .catch((err) => {
            if (err.response.data.errors.email[0]) {
              setLoading(false);
              setMessage(err.response.data.errors.email[0]);
              setAlert(true);
              setAlertType("error");
              // console.log(message);
            }
          });
      }
    }
  };

  // google login
  const handleGoogleSignIn = () => {
    Axios.get(`${backendurl}/api/google/auth/redirect/url`).then((res) => {
      console.log(res.data.data);
      window.open(res.data.data, "_self");
    });
  };

  // facebook login
  const handleFacebookSignIn = () => {
    Axios.get(`${backendurl}/api/facebook/auth/redirect/url`).then((res) => {
      console.log(res.data.data);
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
            paddingTop: "10px",
          }}
        >
          <Typography variant="h5">Sign up</Typography>
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
          <form>
            <TextField
              value={firstname}
              error={error && firstname === "" ? true : false}
              size="small"
              fullWidth={true}
              placeholder="First Name(Required)"
              sx={{
                radius: "10px",
                marginBottom: "15px",
                "&:focus": {
                  borderColor: "#07A804",
                },
              }}
              onChange={(e) => setFirstName(e.target.value)}
              helperText={
                error && firstname === "" ? "This field is required" : ""
              }
              required
            />
            <TextField
              value={lastname}
              size="small"
              fullWidth={true}
              placeholder="Last Name"
              sx={{
                radius: "10px",
                marginBottom: "15px",
              }}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              value={phone}
              error={error && phone === "" ? true : false}
              size="small"
              fullWidth={true}
              placeholder="Phone Number(Required)"
              sx={{
                radius: "10px",
                marginBottom: "15px",
              }}
              required
              helperText={error && phone === "" ? "This field is required" : ""}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              value={email}
              error={error && email === "" ? true : false}
              size="small"
              fullWidth={true}
              placeholder="Email(Required)"
              sx={{
                radius: "10px",
                marginBottom: "15px",
              }}
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              helperText={error && email === "" ? "This field is required" : ""}
            />
            <TextField
              value={password}
              error={error && password === "" ? true : false}
              size="small"
              fullWidth={true}
              placeholder="Password(Required)"
              sx={{
                marginBottom: "15px",
              }}
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              helperText={
                error && password === "" ? "This field is required" : ""
              }
            />
            <TextField
              value={password_confirmation}
              error={error && password_confirmation === "" ? true : false}
              size="small"
              fullWidth={true}
              placeholder="Confirm Password(Required)"
              sx={{
                marginBottom: "2px",
              }}
              required
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              helperText={
                error && password_confirmation === ""
                  ? "This field is required"
                  : ""
              }
            />

            {/* Checkbox */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Checkbox
                size="small"
                color="primary"
                sx={{
                  marginRight: "2px",
                  "&.Mui-checked": {
                    color: "#07A804",
                  },
                }}
                onChange={checkedTerms}
              />
              <Typography variant="body2" sx={{}}>
                I agree to the terms and conditions
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "15px",
              }}
            >
              {/* Register Button */}
              <Button
                variant="contained"
                fullWidth={true}
                sx={{
                  backgroundColor: "#000000",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#000000",
                  },
                }}
                disabled={!termsCheck ? true : false}
                onClick={handleSignupSubmit}
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
                    Register
                  </Typography>
                )}
              </Button>
            </Box>
          </form>
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
              onClick={TextAccounttype}
              sx={{
                borderRadius: "10px",
                textTransform: "none",
              }}
              variant="contained"
              fullWidth={true}
              startIcon={<Facebook />}
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
              Already have an account?
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
              Login
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
