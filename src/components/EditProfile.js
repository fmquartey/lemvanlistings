import { Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import Axios from 'axios';
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
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

    const [loading, setLoading] = useState(false);
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const authAxios = Axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
            "content-type": 'multipart/form-data'
        },
    });


    const id = props.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();

        setName(`${firstname} ${lastname}`);

        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("listing_id", id);
        formData.append("user_id", userId);
        authAxios.post('/api/tenants', formData).then(res => {
            setLoading(false);
            console.log(res.data.data);
            props.handleClose();
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    }

    return (
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
    )
}

export default EditProfile
