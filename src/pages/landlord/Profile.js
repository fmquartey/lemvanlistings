import { Add, CameraAlt } from '@mui/icons-material';
import { Avatar, Box, Button, Divider, IconButton, Paper, Stack, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import EditProfile from '../../components/EditProfile';
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

    const handleOpenDialog = () => {
        setOpenDialog(true)
    }
    const handleClose = () => {
        setOpenDialog(false)
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
                    md: "80%",
                    lg: "80%",
                },
                height: "auto",
                margin: "20px auto",
            }}>
                <Paper elevation={2} sx={{
                    width: "100%",
                    height: "auto",
                    padding: "30px",
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
                                sx={{ width: 70, height: 70 }}
                            />
                            <IconButton
                                component="label"
                                sx={{
                                    width: "26px",
                                    height: "26px",
                                    position: "absolute",
                                    left: "42px",
                                    bottom: "4px",
                                    color: "#000",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <CameraAlt sx={{ fontSize: "18px" }} />
                                <input hidden accept="image/*" type="file" multiple name="avater"
                                    onChange={(e) => setAvater(e.target.files[0])}
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
                                    fontSize: "20px",
                                    fontWeight: "550",
                                }}>
                                    {userName} {userLastName}
                                </Typography>

                                {/* contacts - phone and email */}
                                <Stack spacing={0} mt={1}>
                                    <Typography variant="body1" sx={{
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        color: "#9D9899"
                                    }}>
                                        {userPhone}
                                    </Typography>
                                    <Typography variant="body1" sx={{
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        color: "#9D9899",

                                    }}>
                                        {userEmail}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>

                        {/* buttom */}
                        <Button
                            onClick={handleOpenDialog}
                            variant="outlined"
                            color="inherit"
                            size="small"
                            sx={{
                                fontSize: "14px",
                                textTransform: "none",
                                borderRadius: "5px",
                                border: "1px solid #E2E2E2",
                            }}>
                            Edit Profile
                        </Button>
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
                                        fontSize: "18px",
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
                                    variant="outlined"
                                    color="inherit"
                                    size="small">
                                    <Add sx={{ fontSize: "18px" }} />
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
                                        fontSize: "18px",
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
                                    variant="outlined"
                                    color="inherit"
                                    size="small">
                                    <Add sx={{ fontSize: "18px" }} />
                                </IconButton>
                            </Box>

                        </Stack>


                    </Box>
                </Paper>
            </Box>
            <EditProfile openDialog={openDialog} handleClose={handleClose} />
        </Box >
    );
}

export default Profile;
