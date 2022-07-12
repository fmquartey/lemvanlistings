import { Search } from '@mui/icons-material'
import { Box, Button, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import AllListings from './AllListings';

const Listings = () => {
    const { openSidebar } = useContext(UserContext);

    return (
        <Box
            sx={{
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: !openSidebar ? "85%" : "100%",
                    lg: !openSidebar ? "85%" : "100%",
                },
                height: "auto",
                margin: {
                    md: "auto",
                    lg: "auto"
                },
                padding: "10px 25px",
            }}>
            <Box sx={{
                width: "100%",
                height: "auto",
            }}>
                <Typography variant="body1"
                    sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                    }}>
                    Listings
                </Typography>
            </Box>
            <Outlet/>
        </Box>
    )
}

export default Listings
