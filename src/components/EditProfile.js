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
        userPhone,
        setUserPhone,
        alert,
        setAlert,
        userName,
        userLastName,
        userEmail,
    } = useContext(UserContext);


    const [statusMsg, setStatusMsg] = useState("");
    const [aletType, setAletType] = useState('success');
    const [openToast, setOpenToast] = useState(false);
    const [loading, setLoading] = useState(false);
    const [firstname, setFirstName] = useState(userName);
    const [lastname, setLastName] = useState(userLastName);
    const [phone, setPhone] = useState(userPhone);
    const [email, setEmail] = useState(userEmail);


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
        setStatusMsg("");
        setAlert(false);
        const formData = new FormData();
        formData.append("phone", phone);
        formData.append("_method", "PUT");

        authAxios.post(`/api/update/user/${userId}/profile`, formData).then(res => {
            localStorage.setItem("user-info", JSON.stringify(res.data.data));
            setLoading(false);
            setAlert(true);
            console.log(res.data.data);
            setAletType("success");
            setStatusMsg("Profile updated successfully");
            setUserPhone(res.data.data.phone);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
            setAletType("error");
            setStatusMsg("Sorry there is an error please try again");
            setAlert(true);
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
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            label="First Name"
                            disabled={true}
                        />
                        <TextField
                            color="success"
                            fullWidth={true}
                            size="small"
                            value={userLastName}
                            onChange={(e) => setLastName(e.target.value)}
                            label="Last Name"
                            disabled={true}
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
                        <TextField
                            color="success"
                            fullWidth={true}
                            size="small"
                            type="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            label="Phone Number"
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
