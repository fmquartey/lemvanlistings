import { Delete, Edit, Search } from '@mui/icons-material'
import { Box, Button, Divider, InputBase, ListItemIcon, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Axios from "axios";
import { apilink } from '../../Helper';

const AllTenants = () => {

    const navigate = useNavigate();
    const { setTitle } = useContext(UserContext);


    const current = () => {
        // navigate("/app/landlord/listings/create");
        setTitle("")
    }
    const past = () => {
        // navigate("/app/landlord/listings");
        setTitle("\\ Past");
    }
    const upcoming = () => {
        // navigate("/app/landlord/listings/hidden");
        setTitle("\\ Upcoming")
    }

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
                            "&:hover": {
                                backgroundColor: "transparent",
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
                            "&:hover": {
                                backgroundColor: "transparent",
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
                            "&:hover": {
                                backgroundColor: "transparent",
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
                            borderBottom: "1px solid #35BF43",
                            marginLeft: "10px",
                        }}>
                        <InputBase
                            placeholder='Search'
                            fullWidth={true}
                            endAdornment={<Search sx={{
                                color: "#35BF43",
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
