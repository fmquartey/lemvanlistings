import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ForgotPwd = ({ props }) => {
  const [email, setEmail] = useState("");

  return (
    <Dialog
      maxWidth="xs"
      open={props.openForgot}
      onClose={()=>props.handleCloseForgot}
    >
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
              marginBottom: "20px",
            }}
          >
            <Typography variant="h5">Forgot your password</Typography>
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
              type="email"
              size="small"
              fullWidth={true}
              placeholder="Email"
              onChanged={(e) => setEmail(e.target.value)}
              sx={{
                radius: "10px",
                marginBottom: "20px",
                "&.Mui-focused fieldset": {
                  backgroundColor: "#07A804",
                },
              }}
            />
            <Button
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
            >
              <Typography variant="body1">Reset Password</Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body2">
              Know your password? Go back to
            </Typography>
            <Button
              size="small"
              disableRipple={true}
              onClick={props.handleClickOpen}
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
                Log In
              </Typography>
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPwd;
