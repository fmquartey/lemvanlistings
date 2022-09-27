import { Delete, Edit, Forward, Search } from '@mui/icons-material'
import { Box, Button, Divider, InputBase, ListItemIcon, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Skeleton, Typography, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Axios from "axios";
import { apilink } from '../../Helper';
import MoveTenants from '../../components/landlord/MoveTenants';

const AllTenants = () => {
    const { token } = useContext(UserContext);
    const [tenants, setTenants] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [tenantsId, setTenantsId] = useState("")
    const [openDialog, setOpenDialog] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    const [filterTenants, setFilterTenants] = useState("3");


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
        setUpcomingColor,
        movedTenants,
        setMovedTenants,
    } = useContext(UserContext);


    const current = () => {
        // setCurrentColor(true)
        // setAllColor(false);
        // setUpcomingColor(false)
        // setPastColor(false);
        setSearch("1");
    }

    const all = () => {
        // setAllColor(true);
        // setCurrentColor(false)
        // setUpcomingColor(false)
        // setPastColor(false);
        setSearch("");
    }

    const past = () => {
        // setPastColor(true);
        // setAllColor(false);
        // setCurrentColor(false)
        // setUpcomingColor(false)
        setSearch("2");
    }

    const upcoming = () => {
        // setUpcomingColor(true)
        // setAllColor(false);
        // setCurrentColor(false)
        // setPastColor(false);
        setSearch("0");
    }


    const handleFilter = (e) => {
        setFilterTenants(e.target.value);
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


    const moveTenant = () => {
        setMovedTenants(false);
        setOpenDialog(true);
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
                setLoading(false);
            });
    };

    useEffect(() => {
        getTenants();
        setTitle("")
        // setAllColor(true);
        // setCurrentColor(false)
        // setUpcomingColor(false)
        // setPastColor(false);
    }, [movedTenants])


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
                    justifyContent: "flex-start",
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
                        value={filterTenants}
                        onChange={handleFilter}
                    >
                        <MenuItem value="3" onClick={all}>All</MenuItem>
                        <MenuItem value="1" onClick={current}>Current</MenuItem>
                        <MenuItem value="2" onClick={past}>Past</MenuItem>
                        <MenuItem value="0" onClick={upcoming}>Upcoming</MenuItem>
                    </TextField>

                    {/* <Button
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
                    </Button> */}
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
                        type="text"
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
                            tenants.length === 0 ? (
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                    marginTop: "10px",
                                }}>
                                    <Typography align="center" variant="body1" sx={{
                                        fontSize: "14px",
                                    }}>
                                        No Tenants found
                                    </Typography>
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
                                                    return search.toLocaleLowerCase() === "" ? item : item.name.toLocaleLowerCase().includes(search) || item.status.toString().includes(search) || item.location.toLocaleLowerCase().includes(search) || item.property_type.toLocaleLowerCase().includes(search) || item.email.toLocaleLowerCase().includes(search)
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
                                                                onClick={(e) => {
                                                                    setAnchorEl(e.currentTarget)
                                                                    setTenantsId(item.id)
                                                                    setStatusMsg(item.status === 1 ? "Current" : item.status === 2 ? "Past" : "Upcoming")
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
                <MenuItem>
                    <ListItemIcon>
                        <Edit fontSize="inherit" />
                    </ListItemIcon>
                    Edit
                </MenuItem>
                <Divider />
                <MenuItem onClick={moveTenant}>
                    <ListItemIcon>
                        <Forward fontSize="inherit" />
                    </ListItemIcon>
                    Move
                </MenuItem>
            </Menu>
            <MoveTenants openDialog={openDialog} id={tenantsId} handleClose={handleClose} statusMsg={statusMsg} />
        </Box>
    )
}

export default AllTenants
