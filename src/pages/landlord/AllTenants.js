import { Delete, Edit, Search } from '@mui/icons-material'
import { Box, Button, Divider, InputBase, ListItemIcon, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Axios from "axios";
import { apilink } from '../../Helper';

const AllTenants = () => {
    const navigate = useNavigate();
    const {
        setTitle,
        allColor,
        setAllColor,
        currentcolor,
        setCurrentColor,
        pastcolor,
        setPastColor,
        upcomingcolor,
        setUpcomingColor
    } = useContext(UserContext);


    const current = () => {
        setCurrentColor(true)
        setAllColor(false);

        setUpcomingColor(false)
        setPastColor(false);

        navigate("/app/landlord/tenants/current");
    }

    const all = () => {
        setAllColor(true);
        setCurrentColor(false)
        setUpcomingColor(false)
        setPastColor(false);

        navigate("/app/landlord/tenants");
    }

    const past = () => {
        setPastColor(true);
        setAllColor(false);
        setCurrentColor(false)
        setUpcomingColor(false)

        navigate("/app/landlord/tenants/past");

    }
    const upcoming = () => {
        setUpcomingColor(true)
        setAllColor(false);

        setCurrentColor(false)
        setPastColor(false);

        navigate("/app/landlord/tenants/upcoming");

    }

    useEffect(() => {
        // setCurrentColor(true)
    }, [])

    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
            }}>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2
                }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Button
                        size="small"
                        onClick={all}
                        sx={{
                            color: "#000",
                            textTransform: "none",
                            backgroundColor: allColor ? "#ACACAC" : null,
                            marginRight: "10px",
                            "&:hover": {
                                backgroundColor: "#ACACAC",
                            }
                        }}>
                        All
                    </Button>
                    <Button
                        size="small"
                        onClick={current}
                        sx={{
                            color: "#000",
                            textTransform: "none",
                            backgroundColor: currentcolor ? "#ACACAC" : null,
                            marginRight: "10px",
                            "&:hover": {
                                backgroundColor: "#ACACAC",
                            }
                        }}>
                        Current
                    </Button>

                    <Button
                        size="small"
                        onClick={past}
                        sx={{
                            color: "#000",
                            textTransform: "none",
                            backgroundColor: pastcolor ? "#ACACAC" : null,
                            marginRight: "10px",

                            "&:hover": {
                                backgroundColor: "#ACACAC",
                            }
                        }}>
                        Past
                    </Button>
                    <Button
                        size="small"
                        onClick={upcoming}
                        sx={{
                            color: "#000",
                            textTransform: "none",
                            backgroundColor: upcomingcolor ? "#ACACAC" : null,
                            "&:hover": {
                                backgroundColor: "#ACACAC",
                            }
                        }}>
                        Upcoming
                    </Button>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>

                </Box>
            </Box>
            <Outlet />
        </Box>
    )
}

export default AllTenants
