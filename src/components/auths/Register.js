import React, { useEffect, useState } from "react";

import { Close, Facebook, Google } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
  DialogTitle,
  Alert,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { Axios } from "axios";

const Register = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const [account_type, setAccount_type] = useState(0);
  const [accept_terms, setAccept_terms] = useState(1);
  const [ForgotEmail, setForgotEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

  // State for login dialog
  const [open, setOpen] = useState(false);

  // State for the signup dialog
  const [openSignup, setOpenSignup] = useState(false);

  // State for the terms and conditions
  const [termsCheck, settermsCheck] = useState(false);

  // forgot password dialog
  const [openForgot, setOpenForgot] = useState(false);

  // function for the terms and conditions
  const checkedTerms = () => {
    if (termsCheck) {
      settermsCheck(false);
    } else {
      settermsCheck(true);
    }
  };

  // handle form submit
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // send data to server
    Axios.post("http://9e15-154-160-20-102.ngrok.io/api/register", {
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
        setMessage(res.data.data.message);
        setAlert(true);
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    window.open(
      "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=553956927916-05mpl2ves254lr8repoi31ub9vj851l3.apps.googleusercontent.com&redirect_uri=https%3A%2F%2F58cc-41-218-216-215.eu.ngrok.io%2Fverified&scope=openid%20profile%20email&response_type=code&flowName=GeneralOAuthFlow",
      "_self"
    );

    // Axios.get(
    //   "http://9e15-154-160-20-102.ngrok.io/api/google/auth/redirect/url"
    // ).then((res) => {
    //   console.log(res.data.data);
    // });
  };

  // function to open the login dialog
  const handleClickOpen = () => {
    setOpen(true);
    setOpenSignup(false);
    setOpenForgot(false);
  };

  return (
    <Dialog maxWidth="xs" open={props.openSignupLandLord}>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <Typography variant="h5">Register as {props.accountTpe}</Typography>
          <IconButton size="small" sx={{}} onClick={props.handleClose}>
            <Close
              sx={{
                fontSize: "1rem",
              }}
            />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "350px",
              lg: "350px",
            },
            padding: {
              xs: "",
              sm: "",
              md: "1rem",
              lg: "1rem",
            },
          }}
        >
          <Box
            sx={{
              marginBottom: "15px",
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
          <FormGroup>
            <TextField
              size="small"
              fullWidth={true}
              placeholder="First Name"
              sx={{
                radius: "10px",
                marginBottom: "15px",
                "&:focus": {
                  borderColor: "#07A804",
                },
              }}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
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
              size="small"
              fullWidth={true}
              placeholder="Phone Number"
              sx={{
                radius: "10px",
                marginBottom: "15px",
              }}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              size="small"
              fullWidth={true}
              placeholder="Email"
              sx={{
                radius: "10px",
                marginBottom: "15px",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              size="small"
              fullWidth={true}
              placeholder="Password"
              sx={{
                marginBottom: "15px",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              size="small"
              fullWidth={true}
              placeholder="Confirm Password"
              sx={{
                marginBottom: "2px",
              }}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormGroup>

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
              <Typography
                variant="body1"
                sx={{
                  textTransform: "none",
                }}
              >
                Register
              </Typography>
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
            >
              <Typography variant="body1">Sign in with Facebook</Typography>
            </Button>

            <Button
              onClick={handleGoogleSignIn}
              sx={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                textTransform: "none",
              }}
              color="inherit"
              variant="contained"
              fullWidth={true}
              startIcon={<Google />}
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
            }}
          >
            <Typography
              variant="body2"
              sx={{
                marginRight: "3px",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Have an account?
            </Typography>
            <Button
              size="small"
              disableRipple={true}
              onClick={handleClickOpen}
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
                  color: "#07A804",
                }}
              >
                Log In
              </Typography>
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
