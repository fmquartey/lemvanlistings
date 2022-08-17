import { Delete, Edit, Forward, Search } from '@mui/icons-material'
import { Box, Button, Divider, InputBase, ListItemIcon, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Skeleton, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Axios from "axios";
import { apilink } from '../../Helper';

const AllTenants = () => {
    const { token } = useContext(UserContext);
    const [tenants, setTenants] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);


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
        setSearch("1");
    }

    const all = () => {
        setAllColor(true);
        setCurrentColor(false)
        setUpcomingColor(false)
        setPastColor(false);
        setSearch("");

    }

    const past = () => {
        setPastColor(true);
        setAllColor(false);
        setCurrentColor(false)
        setUpcomingColor(false)
        setSearch("2");
    }
    const upcoming = () => {
        setUpcomingColor(true)
        setAllColor(false);
        setCurrentColor(false)
        setPastColor(false);
        setSearch("0");
        // navigate("/app/landlord/tenants/upcoming");
    }


    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };


    const moveToPast = (id) => {
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


    const getTenants = () => {
        setLoading(true);
        authAxios.get(`${apilink}/api/tenants`)
            .then((res) => {
                setLoading(false);
                setTenants(res.data.data);
                console.log(tenants)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getTenants();
        setTitle("")
        setAllColor(true);
        setCurrentColor(false)
        setUpcomingColor(false)
        setPastColor(false);
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
                        onChange={(e) => setSearch(e.target.value)}
                        fullWidth={true}
                        endAdornment={<Search sx={{
                            color: "#ACACAC",
                        }} />}
                    />
                </Box>
                {
                    loading ?
                        (
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

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Name</TableCell>
                                            <TableCell align="center">Phone</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">Property type</TableCell>
                                            <TableCell align="center">Location</TableCell>
                                            <TableCell align="center">Duration</TableCell>
                                            <TableCell align="center">Start date</TableCell>
                                            <TableCell align="center">End date</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            tenants.filter((item, index) => {
                                                return item.name.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase() === "" ? item : item.status.toString().includes(search.toString()) || item.name.toLowerCase() === "" ? item : item.location.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase() === "" ? item : item.property_type.toLowerCase().includes(search.toLowerCase())
                                            }).map((item, index) => (
                                                <TableRow
                                                    key={index}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="center">{item.name}</TableCell>
                                                    <TableCell align="center">{item.phone}</TableCell>
                                                    <TableCell align="center">{item.email}</TableCell>
                                                    <TableCell align="center">{item.property_type}</TableCell>
                                                    <TableCell align="center">{item.location}</TableCell>
                                                    <TableCell align="center">{item.duration}</TableCell>
                                                    <TableCell align="center">{item.start_date}</TableCell>
                                                    <TableCell align="center">{item.end_date}</TableCell>
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
                }
            </Box>
            <Menu
                id="menu-area"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Edit fontSize="inherit" />
                    </ListItemIcon>
                    Edit
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => moveToPast(12)}>
                    <ListItemIcon>
                        <Forward fontSize="inherit" />
                    </ListItemIcon>
                    Move
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default AllTenants
