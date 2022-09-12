import { Forward, Search } from '@mui/icons-material';
import { Box, Button, Divider, InputBase, ListItemIcon, Menu, MenuItem, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { apilink } from '../../Helper';

const TenantsAppointments = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [appointmentID, setAppointmentID] = useState("");
    const [statusMsg, setStatusMsg] = useState("");

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const {
        title,
        openSidebar,
        allAppCol,
        setAllAppCol,
        token,
        pendingAppCol,
        setPendingAppCol,
        completedAppCol,
        setCompletedAppCol,
        movedListing,
        setMovedListing,
    } = useContext(UserContext);

    const authAxios = Axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
        },
    });


    const allAppoinments = () => {
        setAllAppCol(true);
        setPendingAppCol(false);
        setCompletedAppCol(false);
        setSearch("");
        // navigate("/app/landlord/listings");
    }

    const pendingAppointments = () => {
        setPendingAppCol(true);
        setAllAppCol(false);
        setCompletedAppCol(false);
        setSearch("1");
        // navigate("/app/landlord/listings/published");
    }

    const completedAppointments = () => {
        setCompletedAppCol(true);
        setAllAppCol(false);
        setPendingAppCol(false);
        setSearch("1");
        // navigate("/app/landlord/listings/published");
    }

    const getAppoinment = () => {
        setLoading(true);
        authAxios.get("/api/user/appointments").then((res) => {
            setLoading(false)
            console.log(res.data.data);
            setAppointments(res.data.data);
        }).catch((err) => {
            setLoading(false);
            console.log(err)
        })
    }

    useEffect(() => {
        setAllAppCol(true);
        setPendingAppCol(false);
        setCompletedAppCol(false);
        getAppoinment();
    }, [])

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
                    Appointments {title}
                </Typography>
            </Box>
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
                    }}>
                    {/* <Box sx={{
                        display: "flex",
                        alignItems: "center",
                    }}> */}
                    {/* <Button
                            size="small"
                            onClick={allAppoinments}
                            sx={{
                                color: "#000",
                                textTransform: "none",
                                backgroundColor: allAppCol ? "#ACACAC" : null,
                                marginRight: "10px",
                                "&:hover": {
                                    backgroundColor: "#ACACAC",
                                }
                            }}>
                            All
                        </Button> */}

                    {/* <Button
                            size="small"
                            onClick={allAppoinments}
                            sx={{
                                color: "#000",
                                textTransform: "none",
                                backgroundColor: allAppCol ? "#ACACAC" : null,
                                marginRight: "10px",
                                "&:hover": {
                                    backgroundColor: "#ACACAC",
                                }
                            }}>
                            Accepted
                        </Button> */}
                    {/* <Button
                            size="small"
                            onClick={pendingAppointments}

                            sx={{
                                color: "#000",
                                textTransform: "none",
                                backgroundColor: pendingAppCol ? "#ACACAC" : null,
                                marginRight: "10px",
                                "&:hover": {
                                    backgroundColor: "#ACACAC",
                                }
                            }}>
                            Pending
                        </Button> */}

                    {/* <Button
                            size="small"
                            onClick={completedAppointments}
                            sx={{
                                color: "#000",
                                textTransform: "none",
                                backgroundColor: completedAppCol ? "#ACACAC" : null,
                                marginRight: "10px",

                                "&:hover": {
                                    backgroundColor: "#ACACAC",
                                }
                            }}>
                            Completed
                        </Button> */}
                    {/* </Box> */}
                </Box>

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

                            appointments.length === 0 ? (
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                    marginTop: "10px",
                                }}>
                                    <Typography align="center" variant="body1" sx={{
                                        fontSize: "14px",
                                    }}>
                                        No appointments yet
                                    </Typography>
                                </Box>
                            ) : (
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Type of appointment</TableCell>
                                                <TableCell align="center">Property title</TableCell>
                                                <TableCell align="center">Landlord</TableCell>
                                                {/* <TableCell align="center">Phone</TableCell> */}
                                                <TableCell align="center">Appointment date</TableCell>
                                                <TableCell align="center">Appointment time</TableCell>
                                                {/* <TableCell align="center">Status</TableCell> */}
                                                {/*<TableCell align="center">Actions</TableCell> */}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                appointments.filter((row, index) => {
                                                    return search.toLocaleLowerCase() === "" ? row : row.appointment_type.toLocaleLowerCase().includes(search) || row.appointment_date.toLocaleLowerCase().includes(search) || row.appointment_time.toLocaleLowerCase().includes(search) || row.user.name.toLocaleLowerCase().includes(search)
                                                }).map((row, index) => (
                                                    <TableRow
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell align="center">
                                                            {row.appointment_type}
                                                        </TableCell>
                                                        <TableCell align="center">{row.listing.title}</TableCell>
                                                        <TableCell align="center">{row.user.name}</TableCell>
                                                        {/* <TableCell align="center">{row.user.phone}</TableCell> */}
                                                        <TableCell align="center">{row.appointment_date}</TableCell>
                                                        <TableCell align="center">{row.appointment_time}</TableCell>
                                                        {/* <TableCell align="center">{
                                                            row.status === 2 ? "Draft" : row.status === 1 ? "Published" : "Hidden"
                                                        }</TableCell> */}
                                                        {/* <TableCell align="center">
                                                            <Button
                                                                onClick={(e) => {
                                                                    setAnchorEl(e.currentTarget)
                                                                    setAppointmentID(row.id)
                                                                    setStatusMsg(row.status === 1 ? "Published" : row.status === 2 ? "Draft" : "Hidden")
                                                                }}
                                                                variant="text"
                                                                sx={{
                                                                    textTransform: "none",
                                                                    fontSize: "14px",
                                                                    fontWeight: "600",
                                                                    color: "#35BF43",
                                                                }}>Options</Button>
                                                        </TableCell> */}
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
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Forward fontSize="inherit" />
                        </ListItemIcon>
                        Move
                    </MenuItem>
                    <Divider />
                </Menu>
                {/* <MoveListing openDialog={openDialog} id={listingId} handleClose={handleClose} statusMsg={statusMsg} /> */}
            </Box>
            {/* <Outlet /> */}
        </Box>
    )
}

export default TenantsAppointments
