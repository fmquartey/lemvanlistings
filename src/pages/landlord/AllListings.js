import { Delete, Edit, Search } from '@mui/icons-material'
import { Box, Button, Divider, InputBase, ListItemIcon, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Axios from "axios";
import { apilink } from '../../Helper';


const AllListings = () => {
    const navigate = useNavigate();
    const { setTitle } = useContext(UserContext);


    const createNewListing = () => {
        navigate("/app/landlord/listings/create");
        setTitle("\\ Create listing")
    }
    const publishedListing = () => {
        navigate("/app/landlord/listings");
        setTitle("");
    }
    const hiddenListing = () => {
        navigate("/app/landlord/listings/hidden");
        setTitle("\\ Hidden")
    }
    const draftListing = () => {
        navigate("/app/landlord/listings/draft");
        setTitle("\\ Draft")
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
                        onClick={publishedListing}

                        sx={{
                            color: "#000",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "transparent",
                            }
                        }}>
                        Published(0)
                    </Button>

                    <Button
                        size="small"
                        onClick={draftListing}
                        sx={{
                            color: "#000",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "transparent",
                            }
                        }}>
                        Draft(0)
                    </Button>

                    <Button
                        size="small"
                        onClick={hiddenListing}
                        sx={{
                            color: "#000",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "transparent",
                            }
                        }}>
                        Hidden(0)
                    </Button>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Button
                        size="small"
                        onClick={createNewListing}
                        color="success"
                        variant="outlined"
                        sx={{
                            borderRadius: "8px",
                            textTransform: "none",
                            height: "30px",
                            "&:hover": {
                                backgroundColor: "transparent",
                            }
                        }}>
                        <Typography variant="body1"
                            sx={{
                                fontSize: "12px",
                                fontWeight: "600",
                                color: "#35BF43",

                            }}>Create new listing</Typography>
                    </Button>
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

export default AllListings
