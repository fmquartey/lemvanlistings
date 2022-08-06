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
    const [allCol, setAllCol] = useState(false);
    const [publishedCol, setPublishedCol] = useState(false);
    const [hiddendCol, setHiddenCol] = useState(false);
    const [draftCol, setDraftCol] = useState(false);


    const createNewListing = () => {
        navigate("/app/landlord/listings/create");
        setTitle("\\ Create listing")
    }
    const allListing = () => {
        setAllCol(true);
        setPublishedCol(false);
        setHiddenCol(false);
        setDraftCol(false);
        setTitle("");
        navigate("/app/landlord/listings");

    }

    const publishedListing = () => {
        setPublishedCol(true);
        setAllCol(false);
        setHiddenCol(false);
        setDraftCol(false);
        setTitle("");
        navigate("/app/landlord/listings/published");

    }
    const hiddenListing = () => {
        setHiddenCol(true);
        setAllCol(false);
        setPublishedCol(false);
        setDraftCol(false);
        setTitle("\\ Hidden")
        navigate("/app/landlord/listings/hidden");
    }
    const draftListing = () => {
        setDraftCol(true);
        setAllCol(false);
        setHiddenCol(false);
        setPublishedCol(false);
        setTitle("\\ Draft");
        navigate("/app/landlord/listings/draft");

    }

    useEffect(() => {
        setAllCol(true);
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
                        onClick={allListing}

                        sx={{
                            color: "#000",
                            textTransform: "none",
                            backgroundColor: allCol ? "#ACACAC" : null,
                            marginRight: "10px",
                            "&:hover": {
                                backgroundColor: "#ACACAC",
                            }
                        }}>
                        All
                    </Button>

                    <Button
                        size="small"
                        onClick={publishedListing}

                        sx={{
                            color: "#000",
                            textTransform: "none",
                            backgroundColor: publishedCol ? "#ACACAC" : null,
                            marginRight: "10px",
                            "&:hover": {
                                backgroundColor: "#ACACAC",
                            }
                        }}>
                        Published
                    </Button>

                    <Button
                        size="small"
                        onClick={draftListing}
                        sx={{
                            color: "#000",
                            textTransform: "none",
                            backgroundColor: draftCol ? "#ACACAC" : null,
                            marginRight: "10px",

                            "&:hover": {
                                backgroundColor: "#ACACAC",
                            }
                        }}>
                        Draft
                    </Button>

                    <Button
                        size="small"
                        onClick={hiddenListing}
                        sx={{
                            color: "#000",
                            textTransform: "none",
                            backgroundColor: hiddendCol ? "#ACACAC" : null,
                            marginRight: "10px",
                            "&:hover": {
                                backgroundColor: "#ACACAC",
                            }
                        }}>
                        Hidden
                    </Button>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Button
                        size="small"
                        onClick={createNewListing}
                        variant="outlined"
                        sx={{
                            borderRadius: "8px",
                            textTransform: "none",
                            height: "30px",
                            border: "1px solid #000",
                            "&:hover": {
                                backgroundColor: "transparent",
                                border: "1px solid #000",
                            }
                        }}>
                        <Typography variant="body1"
                            sx={{
                                fontSize: "12px",
                                fontWeight: "600",
                                color: "#000",

                            }}>Create new listing</Typography>
                    </Button>
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

export default AllListings
