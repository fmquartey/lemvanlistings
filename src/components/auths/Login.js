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
} from "@mui/material";
import React, { useState } from "react";
import AccountType from "./AccountType";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openAccountType, setopenAccountType] = useState(false);

  const handleOpenAccountType = () => {
    setopenAccountType(true);
    setOpenLogin(false);
  };

  const handleCloseAccountType = () => {
    setopenAccountType(false);
  };

  return (
    <>
      <Dialog maxWidth="xs" open={props.openLogin} >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 1rem",
            }}
          >
            <Typography variant="h5">Login</Typography>
            <IconButton
              size="small"
              sx={{}}
              onClick={props.handleCloseLogin}
            >
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
            <TextField
              size="small"
              fullWidth={true}
              placeholder="Email or Phone"
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                radius: "10px",
                marginBottom: "15px",
                "&.Mui-focused fieldset": {
                  backgroundColor: "#07A804",
                },
              }}
            />
            <TextField
              size="small"
              fullWidth={true}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: "5px" }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                marginBottom: "15px",
              }}
            >
              <Button
                size="small"
                disableRipple={true}
                onClick={props.handleForgot}
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
                    fontSize: "14px",
                  }}
                >
                  Forgot Password?
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "15px",
              }}
            >
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
              >
                <Typography variant="body1">Login</Typography>
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
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: "10px",
                  textTransform: "none",
                }}
                color="inherit"
                variant="contained"
                fullWidth={true}
                startIcon={<Google />}
                onClick={props.handleGoogleSignIn}
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
                  marginRight: "5px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Don't have an account?
              </Typography>
              <Button
                size="small"
                disableRipple={true}
                onClick={handleOpenAccountType}
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
                    fontSize: "14px",
                  }}
                >
                  Sign Up
                </Typography>
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      <AccountType
        openAccountType={openAccountType}
        handleCloseAccountType={handleCloseAccountType}

      />
    </>
  );
};

export default Login;
