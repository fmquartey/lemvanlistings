import { Delete, Edit, Search } from '@mui/icons-material'
import { Box, Button, Divider, InputBase, ListItemIcon, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Axios from "axios";
import { apilink } from '../../Helper';

const AllTenants = () => {
    const [currentcolor, setCurrentColor] = useState(false);
    const [pastcolor, setPastColor] = useState(false);
    const [upcomingcolor, setUpcomingColor] = useState(false);
    const navigate = useNavigate();
    const { setTitle } = useContext(UserContext);


    const current = () => {
        setCurrentColor(true)
        setUpcomingColor(false)
        setPastColor(false);
        setTitle("");
        navigate("/app/landlord/tenants");

    }
    const past = () => {
        setPastColor(true);
        setCurrentColor(false)
        setUpcomingColor(false)
        setTitle("\\ Past");
        navigate("/app/landlord/tenants/past");

    }
    const upcoming = () => {
        setUpcomingColor(true)
        setCurrentColor(false)
        setPastColor(false);
        setTitle("\\ Upcoming")
        navigate("/app/landlord/tenants/upcoming");

    }

    useEffect(() => {
        setCurrentColor(true)
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
                        Current(0)
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
                        Past(0)
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
                        Upcoming(0)
                    </Button>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>

                    <Box
                        sx={{
                            padding: "0px 10px",
                            borderBottom: "1px solid #ACACAC",
                            marginLeft: "10px",
                        }}>
                        <InputBase
                            placeholder='Search'
                            fullWidth={true}
                            endAdornment={<Search sx={{
                                color: "#ACACAC",
                            }} />}
                        />
                    </Box>
                </Box>
            </Box>
            <Outlet />
        </Box>
    )
}

export default AllTenants
