import React, { useState, useContext } from "react";

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
  Avatar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  AccountCircleOutlined,
  Close,
  Facebook,
  Google,
} from "@mui/icons-material";
import { UserContext } from "../context/UserContext";
import Axios from "axios";
import { apilink } from "../Helper";

const TopBar = () => {
  const { user, setUser, userName, userAvater, token } = useContext(UserContext);
  const navigate = useNavigate();
  const userinfo = JSON.parse(localStorage.getItem("user-info"));
  const backendurl = apilink;

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  
  const authAxios = Axios.create({
    baseURL: backendurl,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const handleLogout = () => {
    
    handleCloseMenu();
    authAxios
      .get("/api/logout")
      .then((res) => {
        localStorage.removeItem("user-info");
        setUser(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                <Avatar
                  // src="https://material-ui.com/static/images/avatar/1.jpg"
                  src={userAvater}
                  alt={userName}
                  id="basic-button"
                  aria-controls="menu-area"
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleMenuClick}
                  size="small"
                  sx={{
                    width: 35,
                    height: 35,
                    cursor: "pointer",
                  }}
                />
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
