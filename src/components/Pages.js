import { Menu, Logout } from '@mui/icons-material'
import { Box, Button, ListItemIcon, Divider, MenuItem, IconButton, Paper, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Axios from "axios";
import { apilink } from "../Helper";

const Pages = () => {
    const { user, setUser, userName, userAvater, token } = useContext(UserContext);

    const navigate = useNavigate();
    const { openSidebar, setOpenSideBar } = useContext(UserContext);


    const handleOpenSidebar = () => {
        if (openSidebar) {
            setOpenSideBar(false);
        } else {
            setOpenSideBar(true);
        }
    }
    const authAxios = Axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const handleLogout = () => {

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
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                backgroundColor: "#F5F5F5",
                overflowY: "scroll",

            }}>
            <Box
                sx={{
                    width: "100%",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #E0E0E0",
                    padding: "0px 20px",
                    position: "sticky",
                }}>
                <Box>
                    <IconButton
                        onClick={handleOpenSidebar}>
                        <Menu
                            sx={{
                                fontSize: "20px",
                            }}
                        />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton
                        onClick={handleLogout}>
                        <Logout
                            sx={{
                                fontSize: "20px",
                            }} />
                    </IconButton>
                    {/* <Button
                        startIcon={<Logout fontSize="inherit"/>}
                        onClick={handleLogout}
                        variant="text"
                        sx={{
                            textTransform: "none",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#35BF43",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>Logout</Button> */}
                </Box>
            </Box>

            <Outlet />
        </Box >
    )
}

export default Pages
