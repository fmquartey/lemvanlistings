import React, { useState ,useContext} from "react";


import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  DialogContent,
  Divider,
  Dialog,
  IconButton,
  FormGroup,
  TextField,
  Toolbar,
  Typography,
  Stack,
  Alert,
  Menu,
  MenuItem,
  DialogTitle,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  AccountCircleOutlined,
  Close,
  Facebook,
  Google,
} from "@mui/icons-material";
import { UserContext } from "../context/UserContext";


const TopBar = () => {
const { user, setUser, userName } = useContext(UserContext);
const navigate = useNavigate(); 

  
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => { 
    setUser(false);
    handleCloseMenu();
    localStorage.removeItem("user-info");
    navigate("/");
  }



  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={1}
        sx={{
          backgroundColor: "#FBFDFB",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Link
              to="/"
              style={{
                fontSize: "16px",
                textDecoration: "none",
                color: "#07A804",
              }}
            >
              <Typography variant="h5" component="div">
                LOGO
              </Typography>
            </Link>

            {/* Menu Button */}
            {user ? (
              <>
                <IconButton
                  id="basic-button"
                  aria-controls="menu-area"
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleMenuClick}
                >
                  <AccountCircleOutlined
                    fontSize="large"
                    sx={{
                      color: "#07A804",
                    }}
                  />
                </IconButton>
                {/* dropdown items */}
                <Menu
                  id="menu-area"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleCloseMenu}
                >
                  <MenuItem onClick={handleCloseMenu}>{userName}</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              // Login Button
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Login
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default TopBar;
