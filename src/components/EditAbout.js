import { Alert, Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import Axios from 'axios';
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import Toast from './Toast';
import Progress from './Progress';

import { apilink } from '../Helper';

const EditAbout = (props) => {

    const {
        token,
        userId,
        userAbout,
        setUserAbout,
        alert,
        setAlert,
        
    } = useContext(UserContext);


    const [statusMsg, setStatusMsg] = useState("");
    const [aletType, setAletType] = useState("");
    const [openToast, setOpenToast] = useState(false);
    const [loading, setLoading] = useState(false);
    const [about, setAbout] = useState(userAbout);


    const closeToast = (e, r) => {
        if (e === 'clickaway') {
            return;
        }
        setOpenToast(false)
    }

    const authAxios = Axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
            "content-type": 'multipart/form-data'
        },
    });

    // const updatedUser = {
    //     id: userId,
    //     firstname: userName,
    //     lastname: userLastName,
    //     phone: userPhone,
    //     about: about,
    //     access_token: token,
    //     account_type: accountType,
    //     address: userAddress,
    //     avatar: userAvater,
    //     email: userEmail,
    //     email_verified_at: emailVerifiedAt,
    //     updated: "yes"
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMsg("");
        setAlert(false);
        const formData = new FormData();

        formData.append("about", about);
        formData.append("_method", "PUT");

        authAxios.post(`/api/update/user/${userId}/profile`, formData)
            .then(res => {
                localStorage.setItem("user-info", JSON.stringify(res.data.data));
                setLoading(false);
                setAletType("success");
                setStatusMsg("Profile updated successfully");
                setAlert(true);
                setUserAbout(res.data.data.about)
            }).catch((err) => {
                console.log(err);
                setLoading(false);
                setAletType("error");
                setStatusMsg("Sorry there was an error updating profile");
                setAlert(true);
            });
    }

    return (
        <>
            <Dialog
                maxWidth="xs"
                fullWidth={true}
                open={props.openAbout}
                aria-describedby="alert-dialog-description"
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    Add/Edit Profile
                </DialogTitle>
                <DialogContent>
                    <Stack mt={1} spacing={2}>
                        {
                            alert ? (
                                <Alert severity={aletType} sx={{ width: '100%' }}>
                                    {statusMsg}
                                </Alert>
                            ) : null
                        }

                        <TextField
                            color="success"
                            fullWidth={true}
                            size="small"
                            type="text"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            label="About me"
                            multiline={true}
                            rows={10}
                        />

                    </Stack>
                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        marginTop: "15px",
                    }}>
                        <Stack spacing={2} direction="row"
                            sx={{
                                justifyContent: "flex-end",
                            }}>
                            <Button
                                size="small"
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    backgroundColor: "#35BF43",
                                    "&:hover": {
                                        backgroundColor: "#35BF43",
                                    }
                                }}
                                onClick={props.handleCloseAbout}
                            >Cancel
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                size="small"
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    backgroundColor: "#35BF43",
                                    "&:hover": {
                                        backgroundColor: "#35BF43",
                                    }
                                }}
                                disabled={loading ? true : false}
                            >
                                {
                                    loading ? <CircularProgress size={23} color="success" /> : "Save"
                                }
                            </Button>
                        </Stack>
                    </Box>
                </DialogContent>
            </Dialog>
            {/* <Toast open={openToast} close={closeToast} statusType={aletType} message={statusMsg} /> */}
            {/* <Progress openProgress={loading} /> */}
        </>
    )
}

export default EditAbout
