import { Menu, Logout } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";

import Axios from "axios";
import { apilink } from "../../Helper";

const TenantPages = () => {
    const {
        user,
        setUser,
        userName,
        userAvater,
        token,
        openSidebar,
        setOpenSideBar,
        openTenantDrawer,
        setOpenTenantDrawer
    } = useContext(UserContext);

    const navigate = useNavigate();


    const handleOpenSidebar = () => {
        if (openSidebar) {
            setOpenSideBar(false);
        } else {
            setOpenSideBar(true);
        }
    }

    const handleOpenTenantDrawer = () => {
        if (openTenantDrawer) {
            setOpenTenantDrawer(false);
        } else {
            setOpenTenantDrawer(true);
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
                height: "100%",
                backgroundColor: "#F5F5F5",
                overflowY: "scroll",
            }}>
            <Box
                sx={{
                    width: "100%",
                    height: "8%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #E0E0E0",
                    padding: "0px 20px",
                    position: "sticky",
                }}>

                {/* menu larger screens */}
                <Box sx={{
                    width: "auto",
                    height: "auto",
                    display: {
                        xs: "none",
                        sm: "block",
                        md: "block",
                        lg: "block",
                    }
                }}>
                    <IconButton
                        onClick={handleOpenSidebar}>
                        <Menu
                            sx={{
                                fontSize: "20px",
                            }}
                        />
                    </IconButton>
                </Box>

                {/* menu smaller screens */}
                <Box sx={{
                    width: "auto",
                    height: "auto",
                    display: {
                        xs: "block",
                        sm: "none",
                        md: "none",
                        lg: "none",
                    }
                }}>
                    <IconButton
                        onClick={handleOpenTenantDrawer}>
                        <Menu
                            sx={{
                                fontSize: "20px",
                            }}
                        />
                    </IconButton>
                </Box>

                {/* logout */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>

                    <IconButton
                        onClick={handleLogout}>
                        <Logout
                            sx={{
                                fontSize: "20px",
                            }} />
                    </IconButton>
                </Box>
            </Box>
            <Outlet />
        </Box >
    )
}

export default TenantPages
