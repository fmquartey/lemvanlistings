import { Close, Menu } from '@mui/icons-material'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Listings from '../pages/landlord/Listings';
import Tenants from '../pages/landlord/Tenants';

const Pages = () => {
    const { openSidebar, setOpenSideBar } = useContext(UserContext);

    const handleOpenSidebar = () => {
        setOpenSideBar(true);
    }

    const handleCloseSidebar = () => {
        setOpenSideBar(false);
    }

    return (
        // gey background color from theme
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
                    {
                        openSidebar ? (
                            <IconButton
                                onClick={handleCloseSidebar}
                            >
                                <Close
                                    sx={{
                                        fontSize: "20px",
                                    }} />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={handleOpenSidebar}>
                                <Menu
                                    sx={{
                                        fontSize: "20px",
                                    }}
                                />
                            </IconButton>
                        )
                    }
                </Box>
                <Box>
                    <Typography variant="body1">Francis</Typography>
                </Box>
            </Box>
            
            <Outlet/>
        </Box>
    )
}

export default Pages
