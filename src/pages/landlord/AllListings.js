import { Delete, Edit, Search, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Divider, InputBase, ListItemIcon, Menu, MenuItem, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Axios from "axios";
import { apilink } from '../../Helper';
import { data } from '../../listingData';


const AllListings = () => {
    const [listings, setListings] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {
        setTitle,
        allCol,
        token,
        setAllCol,
        publishedCol,
        setPublishedCol,
        hiddendCol,
        setHiddenCol,
        draftCol,
        setDraftCol,
    } = useContext(UserContext);

    const createNewListing = () => {
        navigate("/app/landlord/listings/create");
        setTitle("\\ Create listing")
    }
    const allListing = () => {
        setAllCol(true);
        setPublishedCol(false);
        setHiddenCol(false);
        setDraftCol(false);
        setSearch("");
        // navigate("/app/landlord/listings");
    }

    const publishedListing = () => {
        setPublishedCol(true);
        setAllCol(false);
        setHiddenCol(false);
        setDraftCol(false);
        setSearch("1");
        // navigate("/app/landlord/listings/published");

    }

    const draftListing = () => {
        setDraftCol(true);
        setAllCol(false);
        setHiddenCol(false);
        setPublishedCol(false);
        setSearch("2");
        // navigate("/app/landlord/listings/draft");
    }

    const hiddenListing = () => {
        setHiddenCol(true);
        setDraftCol(false);
        setAllCol(false);
        setPublishedCol(false);
        setSearch("3");
        // navigate("/app/landlord/listings/draft");
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    // const navigate = useNavigate();
    const editListing = (id) => {
        navigate(`/app/landlord/listings/edit/${id}`);
        setTitle("\\ Edit listing")
        handleCloseMenu();
    }

    const deleteListing = (id) => {
        console.log(id);
        handleCloseMenu();
    }

    const authAxios = Axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
            "content-type": 'multipart/form-data'
        },
    });

    
    const getListings = () => {
        setLoading(true);
        authAxios.get(`${apilink}/api/auth/listings`)
            .then((res) => {
                setLoading(false);
                setListings(res.data.data);
                console.log(listings)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        setAllCol(true);
        setPublishedCol(false);
        setHiddenCol(false);
        setDraftCol(false);
        getListings();
        setTitle("");
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
                </Box>
            </Box>

            {/* <Outlet /> */}
            <Box
                sx={{
                    width: "100%",
                    marginTop: "10px",
                }}>
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "300px",
                            md: "300px",
                            lg: "300px",
                        },
                        padding: "0px 10px",
                        border: "1px solid #ACACAC",
                        marginBottom: "10px",
                        borderRadius: "8px",
                    }}>
                    <InputBase
                        placeholder='Search'
                        fullWidth={true}
                        onChange={(e) => setSearch(e.target.value)}
                        endAdornment={<Search sx={{
                            color: "#ACACAC",
                        }} />}
                    />
                </Box>
                {
                    loading ? (
                        <Box
                            sx={{
                                width: "100%",
                                height: "auto",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Skeleton variant="rectangular"
                                sx={{
                                    width: "100%",
                                    height: "40px"
                                }} />

                            <Skeleton variant="rectangular"
                                sx={{
                                    marginTop: "10px",
                                    width: "100%",
                                    height: "50px"
                                }} />

                        </Box>
                    ) : (

                        listings.length === 0 ? (<Box>
                            "No Listings found"
                        </Box>) : (
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Property type</TableCell>
                                            <TableCell align="center">Amount </TableCell>
                                            <TableCell align="center">Location</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            listings.filter((row, index) => {
                                                return search.toLocaleLowerCase() === "" ? row : row.property_type.type.toLocaleLowerCase().includes(search) || row.location.toLocaleLowerCase().includes(search) || row.status.toString().includes(search)
                                            }).map((row, index) => (
                                                <TableRow
                                                    key={index}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell align="center">
                                                        {row.property_type.type}
                                                    </TableCell>
                                                    <TableCell align="center">{row.amount}</TableCell>
                                                    <TableCell align="center">{row.location}</TableCell>
                                                    <TableCell align="center">{
                                                        row.status === 2 ? "Draft" : row.status === 1? "Published": "Hidden"
                                                    }</TableCell>
                                                    <TableCell align="center">
                                                        <Button
                                                            onClick={handleMenuClick}
                                                            variant="text"
                                                            sx={{
                                                                textTransform: "none",
                                                                fontSize: "14px",
                                                                fontWeight: "600",
                                                                color: "#35BF43",
                                                            }}>Options</Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )


                    )
                }
            </Box>
            <Menu
                id="menu-area"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
            >
                <MenuItem onClick={() => editListing(12)}>
                    <ListItemIcon>
                        <Edit fontSize="inherit" />
                    </ListItemIcon>
                    Edit
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => deleteListing(12)}>
                    <ListItemIcon>
                        <VisibilityOff fontSize="inherit" />
                    </ListItemIcon>
                    Hide
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => deleteListing(12)}>
                    <ListItemIcon>
                        <Delete fontSize="inherit" />
                    </ListItemIcon>
                    Delete
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default AllListings
