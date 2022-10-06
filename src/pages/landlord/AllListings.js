import { ArrowForwardIos, Delete, Edit, Forward, Forward10, Search, VisibilityOff, VisibilityRounded } from '@mui/icons-material'
import { Box, Button, Divider, InputBase, ListItemIcon, Menu, MenuItem, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Axios from "axios";
import { apilink } from '../../Helper';
import { data } from '../../listingData';
import MoveListing from '../../components/landlord/MoveListing';
import ListingsView from '../../components/landlord/ListingsView';


const AllListings = () => {
    const [listings, setListings] = useState([]);
    const [listingId, setListingId] = useState("")
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    const [filterListings, setFilterListings] = useState("0");
    const [search, setSearch] = useState("");
    const [openView, setOpenView] = useState(false);

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
        movedListing,
        setMovedListing,
    } = useContext(UserContext);

    const createNewListing = () => {
        navigate("/app/landlord/listings/create");
        setTitle("\\ Create listing")
    }

    const allListing = () => {
        // setAllCol(true);
        // setPublishedCol(false);
        // setHiddenCol(false);
        // setDraftCol(false);
        setSearch("");

        // navigate("/app/landlord/listings");
    }

    const publishedListing = () => {
        // setPublishedCol(true);
        // setAllCol(false);
        // setHiddenCol(false);
        // setDraftCol(false);
        setSearch("1");

        // navigate("/app/landlord/listings/published");
    }

    const draftListing = () => {
        // setDraftCol(true);
        // setAllCol(false);
        // setHiddenCol(false);
        // setPublishedCol(false);
        setSearch("2");

        // navigate("/app/landlord/listings/draft");
    }

    const hiddenListing = () => {
        // setHiddenCol(true);
        // setDraftCol(false);
        // setAllCol(false);
        // setPublishedCol(false);
        setSearch("3");

        // navigate("/app/landlord/listings/draft");
    }

    const handleFilter = (e) => {
        setFilterListings(e.target.value);
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    // const handleMenuClick = (e) => {
    //     setAnchorEl(e.currentTarget);
    // };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    // Close mobil view
    const closeView = () => {
        setOpenView(false)
    }

    // const navigate = useNavigate();
    const editListing = () => {
        navigate(`/app/landlord/listings/edit/${listingId}`);
        setTitle("\\ Edit listing")
        handleCloseMenu();
    }

    const viewListing = () => {
        navigate(`/listing/${listingId}`);
        handleCloseMenu();
    }

    const authAxios = Axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
            "content-type": 'multipart/form-data'
        },
    });

    const deleteListing = () => {
        authAxios.delete(`/api/landlord/listings/${listingId}`).then((res) => {
            setStatusMsg(res.data.message);
            console.log(res.data.message);
            setLoading(false);
            setListings(listings.filter(listing => listing.id !== listingId));
            handleCloseMenu();
        }).catch((err) => {
            setStatusMsg(err.response.data.message);
            console.log(err.response.data.message);
            setLoading(false);
            handleCloseMenu();
        })
    }

    const getListings = () => {
        setListings(data);
        // setLoading(true);
        // authAxios.get(`${apilink}/api/landlord/listings`)
        //     .then((res) => {
        //         setLoading(false);
        //         setListings(res.data.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setLoading(false);
        //     });
    };

    const moveListing = () => {
        setOpenDialog(true);
        setMovedListing(false);
        handleCloseMenu();
    }

    useEffect(() => {
        // setAllCol(true);
        // setPublishedCol(false);
        // setHiddenCol(false);
        // setDraftCol(false);
        getListings();
        setTitle("");
    }, [movedListing])

    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
            }}>
            <Box
                sx={{
                    width: {
                        xs: "100%",
                        sm: "300px",
                        md: "300px",
                        lg: "300px",
                    },
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
                    <TextField
                        select
                        color="success"
                        // fullWidth={true}
                        size="small"
                        value={filterListings}
                        onChange={handleFilter}
                    >
                        <MenuItem value="0" onClick={allListing}>All</MenuItem>
                        <MenuItem value="1" onClick={publishedListing}>Published</MenuItem>
                        <MenuItem value="2" onClick={draftListing}>Draft</MenuItem>
                        <MenuItem value="3" onClick={hiddenListing}>Hidden</MenuItem>
                    </TextField>

                    {/* <Button
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
                    </Button> */}
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Button
                        size="medium"
                        onClick={createNewListing}
                        variant="outlined"

                        sx={{
                            borderRadius: "8px",
                            textTransform: "none",
                            color: "#000",
                            border: "1px solid #ACACAC",
                            "&:hover": {
                                backgroundColor: "transparent",
                                border: "1px solid #35BF43",
                            }
                        }}>
                        Create new listing
                        {/* <Typography variant="body1"
                            sx={{
                                fontSize: "12px",
                                fontWeight: "600",
                                color: "#000",

                            }}>Create new listing</Typography> */}
                    </Button>
                </Box>
            </Box>

            {/* <Outlet /> */}
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
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

                        listings.length === 0 ? (
                            <Box sx={{
                                width: "100%",
                                height: "auto",
                                marginTop: "10px",
                            }}>
                                <Typography align="center" variant="body1" sx={{
                                    fontSize: "14px",
                                }}>
                                    No Listings found
                                </Typography>
                            </Box>
                        ) : (
                            <>
                                <Box
                                    sx={{
                                        display: {
                                            xs: "block",
                                            sm: "block",
                                            md: "none",
                                            lg: "none"
                                        },
                                        width: "100%",
                                        height: "auto",
                                    }}>
                                    {
                                        listings.filter((row) => {
                                            return search.toLowerCase() === "" ? row : row.property_type.toLowerCase().includes(search.toLowerCase()) || row.location.toLowerCase().includes(search.toLowerCase()) || row.status.toString().includes(search) || row.amount.toString().includes(search)
                                        }).map((row, index) => (
                                            <Paper
                                                onClick={(e) => setOpenView(true)}
                                                variant="outlined"
                                                key={index}
                                                sx={{
                                                    marginBottom: "5px"
                                                }}>
                                                <Box
                                                    sx={{
                                                        width: "100%",
                                                        height: "auto",
                                                        padding: "10px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between"
                                                    }}>
                                                    <Box
                                                        sx={{}}>
                                                        <Typography variant="body1"
                                                            sx={{
                                                                marginBottom: "5px",
                                                                fontWeight: "600",
                                                            }}>
                                                            {row.property_title}
                                                        </Typography>
                                                        <Typography variant="body1"
                                                            sx={{
                                                                color: "#9D9899"
                                                            }}>
                                                            {row.property_type}
                                                        </Typography>
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        }}>
                                                        <Typography variant="body1"
                                                            sx={{
                                                                fontSize: "14px",
                                                                color: "#9D9899",
                                                                marginRight: "10px"
                                                            }}>
                                                            {row.status === 2 ? "Draft" : row.status === 1 ? "Published" : row.status === 3 ? "Hidden" : null}
                                                        </Typography>
                                                        <ArrowForwardIos
                                                            sx={{
                                                                fontSize: "15px",
                                                                fontWeight: "700",
                                                                color: "#9D9899"
                                                            }} />
                                                    </Box>
                                                </Box>
                                            </Paper>
                                        ))
                                    }
                                </Box>
                                <TableContainer component={Paper}
                                    sx={{
                                        display: {
                                            xs: "none",
                                            sm: "none",
                                            md: "block",
                                            lg: "block"
                                        }
                                    }}>
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
                                                listings.filter((row) => {
                                                    return search.toLowerCase() === "" ? row : row.property_type.toLowerCase().includes(search) || row.location.toLowerCase().includes(search) || row.status.toString().includes(search) || row.amount.toString().includes(search)
                                                }).map((row, index) => (
                                                    <TableRow
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell align="center">
                                                            {row.property_type}
                                                        </TableCell>
                                                        <TableCell align="center">{row.amount}</TableCell>
                                                        <TableCell align="center">{row.location}</TableCell>
                                                        <TableCell align="center">{
                                                            row.status === 2 ? "Draft" : row.status === 1 ? "Published" : row.status === 3 ? "Hidden" : null
                                                        }</TableCell>
                                                        <TableCell align="center">
                                                            <Button
                                                                onClick={(e) => {
                                                                    setAnchorEl(e.currentTarget)
                                                                    setListingId(row.id)
                                                                    setStatusMsg(row.status === 1 ? "Published" : row.status === 2 ? "Draft" : "Hidden")
                                                                }}
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
                            </>
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
                <MenuItem onClick={viewListing}>
                    <ListItemIcon>
                        <VisibilityRounded fontSize="inherit" />
                    </ListItemIcon>
                    View
                </MenuItem>
                <Divider />
                <MenuItem onClick={editListing}>
                    <ListItemIcon>
                        <Edit fontSize="inherit" />
                    </ListItemIcon>
                    Edit
                </MenuItem>
                <Divider />
                <MenuItem onClick={moveListing}>
                    <ListItemIcon>
                        <Forward fontSize="inherit" />
                    </ListItemIcon>
                    Move
                </MenuItem>
                <Divider />
                <MenuItem onClick={deleteListing}>
                    <ListItemIcon>
                        <Delete fontSize="inherit" />
                    </ListItemIcon>
                    Delete
                </MenuItem>
            </Menu>
            <MoveListing openDialog={openDialog} id={listingId} handleClose={handleClose} statusMsg={statusMsg} />
            <ListingsView openView={openView} closeView={closeView} />
        </Box>
    )
}

export default AllListings
