import { Close, Menu } from '@mui/icons-material'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const Pages = () => {
    const { openSidebar, setOpenSideBar } = useContext(UserContext);

    const handleOpenSidebar = () => {
        setOpenSideBar(true);
    }

    const handleCloseSidebar = () => {
        setOpenSideBar(false);
    }

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
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
                    transition: "5s",
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
                    yes
                </Box>
            </Box>
        </Box>
    )
}

export default Pages
