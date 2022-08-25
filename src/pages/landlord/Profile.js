import {CameraAlt, Edit } from '@mui/icons-material';
import { Avatar, Box, Divider, IconButton, Paper, Stack, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import EditProfile from '../../components/EditProfile';
import Toast from '../../components/Toast';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
    const {
        title,
        userAvater,
        userName,
        openSidebar,
        userId,
        setUser,
        userLastName,
        userPhone,
        userEmail, } = useContext(UserContext);
    const [openDialog, setOpenDialog] = useState(false)
    const [avater, setAvater] = useState("")
    const [statusMsg, setStatusMsg] = useState("");
    const [openToast, setOpenToast] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true)
    }
    const handleClose = () => {
        setOpenDialog(false)
    }

    const closeToast = (e, r) => {
        if (e === 'clickaway') {
            return;
        }
        setOpenToast(false)
    }

    const updateAvater = (e) => {
        e.preventDefault();
        setAvater(e.target.files[0])
        setStatusMsg("Profile updated successfully");
        setOpenToast(true);
        // setLoading(true);
        // authAxios.get(`/api/landlord/listings`)
        //     .then((res) => {
        //         setLoading(false);
        //         setStatusMsg(res.data.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setLoading(false);
        //     });
    }


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
            }
            }>
            <Box sx={{
                width: "100%",
                height: "auto",
            }}>
                <Typography variant="body1"
                    sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                    }}>
                    Profile {title}
                </Typography>
            </Box>
            <Box mt={2} sx={{
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                },
                height: "auto",
                margin: "20px auto",
            }}>
                <Paper elevation={2} sx={{
                    width: "100%",
                    height: "auto",
                    padding: {
                        xs: "25px",
                        sm: "30px",
                        md: "30px",
                        lg: "30px",
                    },
                }}>
                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>

                        <Box sx={{
                            width: "auto",
                            height: "auto",
                            display: "flex",
                            alignItems: "center",
                            position: "relative",

                        }}>
                            {/* profile image */}
                            <Avatar
                                alt={userName}
                                src={userAvater}
                                sx={{
                                    width: {
                                        xs: 40,
                                        sm: 60,
                                        md: 70,
                                        lg: 70
                                    },
                                    height: {
                                        xs: 40,
                                        sm: 60,
                                        md: 70,
                                        lg: 70
                                    },
                                }}
                            />
                            <IconButton
                                component="label"
                                sx={{
                                    width: "26px",
                                    height: "26px",
                                    position: "absolute",
                                    left: {
                                        xs: "22px",
                                        sm: "40px",
                                        md: "42px",
                                        lg: "42px",
                                    },
                                    bottom: {
                                        xs: "10px",
                                        sm: "10px",
                                        md: "4px",
                                        lg: "4px",
                                    },
                                    color: "#000",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <CameraAlt sx={{ fontSize: "18px" }} />
                                <input hidden accept="image/*" type="file" name="avater"
                                    onChange={updateAvater}
                                />
                            </IconButton>

                            {/* name and contacts */}
                            <Box sx={{
                                width: "auto",
                                height: "auto",
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "15px",
                            }}>

                                {/* name */}
                                <Typography variant="body1" sx={{
                                    fontSize: {
                                        xs: "16px",
                                        sm: "20px",
                                        md: "20px",
                                        lg: "20px"
                                    },
                                    fontWeight: "550",
                                }}>
                                    {userName} {userLastName}
                                </Typography>

                                {/* contacts - phone and email */}
                                <Stack spacing={0} mt={1}>
                                    <Typography variant="body1" sx={{
                                        fontSize: {
                                            xs: "14px",
                                            sm: "16px",
                                            md: "16px",
                                            lg: "16px",
                                        },
                                        fontWeight: "500",
                                        color: "#9D9899"
                                    }}>
                                        {userPhone}
                                    </Typography>
                                    <Typography variant="body1" sx={{
                                        fontSize: {
                                            xs: "14px",
                                            sm: "16px",
                                            md: "16px",
                                            lg: "16px",
                                        },
                                        fontWeight: "500",
                                        color: "#9D9899",

                                    }}>
                                        {userEmail}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>

                        {/* buttom */}
                        <IconButton
                            onClick={handleOpenDialog}
                            size="small"
                            sx={{
                                color: "#9D9899",
                                // borderRadius: "5px",
                                // border: "2px solid #E2E2E2",
                            }}>
                            <Edit sx={{
                                fontSize: {
                                    xs: "16px",
                                    sm: "18px",
                                    md: "25px",
                                    lg: "25px",
                                }
                            }} />
                        </IconButton>
                    </Box>

                    <Divider sx={{
                        marginTop: "20px",

                    }} />

                    <Box mt={2} sx={{
                        width: "100%",
                        height: "auto",
                    }}>
                        <Stack spacing={2}>
                            <Box sx={{
                                width: "100%",
                                height: "auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <Stack spacing={0}>
                                    <Typography variant="body1" sx={{
                                        fontSize: {
                                            xs: "16px",
                                            sm: "18px",
                                            md: "18px",
                                            lg: "18px"
                                        },
                                        fontWeight: "550",
                                        color: "#444343"
                                    }}>
                                        About
                                    </Typography>

                                    <Typography variant="body1" sx={{
                                        fontSize: "14px",
                                        fontWeight: "550",
                                        color: "#9D9899"
                                    }}>
                                        -------
                                    </Typography>
                                </Stack>

                                <IconButton
                                    sx={{
                                        color: "#9D9899",
                                    }}
                                    size="small">
                                    <Edit sx={{
                                        fontSize: {
                                            xs: "16px",
                                            sm: "18px",
                                            md: "25px",
                                            lg: "25px",
                                        }
                                    }} />
                                </IconButton>
                            </Box>

                            <Box sx={{
                                width: "100%",
                                height: "auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <Stack spacing={0}>
                                    <Typography variant="body1" sx={{
                                        fontSize: {
                                            xs: "16px",
                                            sm: "18px",
                                            md: "18px",
                                            lg: "18px",
                                        },
                                        fontWeight: "550",
                                        color: "#444343"
                                    }}>
                                        Address
                                    </Typography>

                                    <Typography variant="body1" sx={{
                                        fontSize: "14px",
                                        fontWeight: "550",
                                        color: "#9D9899"
                                    }}>
                                        ------
                                    </Typography>
                                </Stack>

                                <IconButton
                                    sx={{
                                        color: "#9D9899",
                                    }}
                                    size="small">
                                    <Edit sx={{
                                        fontSize: {
                                            xs: "16px",
                                            sm: "18px",
                                            md: "25px",
                                            lg: "25px",
                                        }
                                    }} />
                                </IconButton>
                            </Box>
                        </Stack>
                    </Box>
                </Paper>
            </Box>
            <EditProfile openDialog={openDialog} handleClose={handleClose} />
            <Toast open={openToast} close={closeToast} message={statusMsg} />
        </Box >
    );
}

export default Profile;
