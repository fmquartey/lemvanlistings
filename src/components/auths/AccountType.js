import { Close, Facebook, Google } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AccountType = (props) => {
  const navigate = useNavigate();
  
  const TenantAccount = () =>{
    navigate("/register/accounttype/0");
  }

  const LandlordAccount = () =>{
    navigate("/register/accounttype/1");
  }



  return (
    <Dialog maxWidth="xs" open={props.open}>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
            }}
          >
            Create Account
          </Typography>
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
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
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
              marginBottom: "30px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
              }}
            >
              Select the type of account you'd like to create
            </Typography>
          </Box>
          <Button
            fullWidth={true}
            sx={{
              textTransform: "none",
              width: {
                xs: "70%",
                sm: "70%",
                md: "60%",
                lg: "60%",
              },
              backgroundColor: "#000000",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#000000",
              },
              marginBottom: "20px",
            }}
            onClick={TenantAccount}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#ffffff",
              }}
            >
              Tenant Account
            </Typography>
          </Button>
          <Button
            sx={{
              textTransform: "none",
              width: {
                xs: "70%",
                sm: "70%",
                md: "60%",
                lg: "60%",
              },
              backgroundColor: "#000000",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#000000",
              },
              marginBottom: "10px",
            }}
            onClick={LandlordAccount}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#ffffff",
              }}
            >
              Landlord Account
            </Typography>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AccountType;
