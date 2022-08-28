import { Alert, Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import Axios from 'axios';
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import Toast from './Toast';
import Progress from './Progress';

import { apilink } from '../Helper';

const EditProfile = (props) => {

    const {
        token,
        userId,
        userName,
        userLastName,
        userPhone,
        userEmail,
    } = useContext(UserContext);


    const [statusMsg, setStatusMsg] = useState("");
    const [aletType, setAletType] = useState("");
    const [openToast, setOpenToast] = useState(false);
    const [loading, setLoading] = useState(false);
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("phone", phone);
        // formData.append("email", email);

        authAxios.post(`/api/update/user/${userId}/profile`, formData)
            .then(res => {
                setLoading(false);
                console.log(res.data.data);
                setAletType("success");
                setStatusMsg("Profile updated successfully");
                setOpenToast(true);
                props.handleClose();
            }).catch(err => {
                setLoading(false);
                setAletType("error");
                setStatusMsg("Sorry there is an error updating profile please try again");
                setOpenToast(true);
            });
    }

    return (
        <>
            <Dialog
                maxWidth="xs"
                fullWidth={true}
                open={props.openDialog}
                aria-describedby="alert-dialog-description"
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    Edit Profile
                </DialogTitle>
                <DialogContent>
                    <Stack mt={1} spacing={2}>
                        {
                            !loading ? (
                                <Alert severity={aletType} sx={{ width: '100%' }}>
                                    {statusMsg}
                                </Alert>
                            ) : null
                        }

                        <TextField
                            color="success"
                            fullWidth={true}
                            size="small"
                            value={userName}
                            onChange={(e) => setFirstName(e.target.value)}
                            label="First Name"
                        />
                        <TextField
                            color="success"
                            fullWidth={true}
                            size="small"
                            value={userLastName}
                            onChange={(e) => setLastName(e.target.value)}
                            label="Last Name"
                        />
                        <TextField
                            color="success"
                            fullWidth={true}
                            size="small"
                            type="phone"
                            value={userPhone}
                            onChange={(e) => setPhone(e.target.value)}
                            label="Phone Number"
                        />
                        <TextField
                            color="success"
                            fullWidth={true}
                            size="small"
                            type="email"
                            value={userEmail}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            disabled={true}
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
                                onClick={props.handleClose}
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

export default EditProfile
