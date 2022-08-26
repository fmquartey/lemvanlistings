import { TaskAlt } from '@mui/icons-material';
import { Alert, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, MenuItem, Stack, TextField, Typography } from '@mui/material';
import Axios from 'axios';
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { apilink } from '../Helper';

const ApplyListings = (props) => {
    const { token, user, userId } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [period, setPeriod] = useState("");
    const [duration, setDuration] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");


    const authAxios = Axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
            "content-type": 'multipart/form-data'
        },
    });

    const handleChange = (e) => {
        setPeriod(e.target.value);
    }
    const id = props.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        setName(`${firstname} ${lastname}`);
        setDuration(`${number}/${period}`);
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("duration", duration);
        formData.append("start_date", startDate);
        formData.append("end_date", endDate);
        formData.append("listing_id", id);
        formData.append("user_id", userId);

        if (user) {
            authAxios.post('/api/tenants', formData).then(res => {
                setLoading(false);
                console.log(res.data.data);
                props.handleClose();
            }).catch(err => {
                setLoading(false);
                console.log(err);
            });
        } else {
            console.log("Please log in to perform this action")
            setLoading(false);
        }
       
    }


    return (
        <Dialog
            maxWidth="xs"
            fullWidth={true}
            open={props.openAlert}
            aria-describedby="alert-dialog-description"
            aria-labelledby="alert-dialog-title"
        >
            <DialogTitle id="alert-dialog-title">
                Apply for this Listing
            </DialogTitle>
            <DialogContent>
                <Stack mt={1} spacing={2}>
                    <TextField
                        color="success"
                        fullWidth={true}
                        size="small"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                        label="First Name"
                        required={true}
                    />
                    <TextField
                        color="success"
                        fullWidth={true}
                        size="small"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        label="Last Name"
                        required={true}
                    />
                    <TextField
                        color="success"
                        fullWidth={true}
                        size="small"
                        type="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        label="Phone Number"
                        required={true}
                    />
                    <TextField
                        color="success"
                        fullWidth={true}
                        size="small"
                        type="phone"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        required={true}
                    />
                    <Box
                        sx={{
                            width: "100%",
                            height: "auto",
                        }}
                    >
                        <Divider sx={{
                            marginBottom: "10px",
                        }} />
                        <Typography variant="body1" sx={{
                            fontSize: "14px",
                        }}>
                            How long do you want to stay?
                        </Typography>

                        <Box sx={{
                            width: "100%",
                            height: "auto",
                            marginTop: "15px",
                        }}>
                            <Stack spacing={2}>
                                <TextField
                                    color="success"
                                    fullWidth={true}
                                    size="small"
                                    type="number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    label="No. of years / months"
                                    required={true}
                                />
                                <TextField
                                    color="success"
                                    select
                                    fullWidth={true}
                                    size="small"
                                    value={period}
                                    onChange={handleChange}
                                    label="Week/Month/Year"
                                    sx={{
                                        marginTop: "3px"
                                    }}
                                >
                                    <MenuItem value="week">Week</MenuItem>
                                    <MenuItem value="month">Month</MenuItem>
                                    <MenuItem value="year">Year</MenuItem>
                                </TextField>


                            </Stack>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            width: "100%",
                            height: "auto",
                        }}
                    >
                        <Stack spacing={2}>
                            <Box sx={{
                                width: "100%",
                                height: "auto",
                            }}>
                                <Typography variant="body1" sx={{
                                    fontSize: "14px",
                                }}>
                                    Start Date
                                </Typography>
                                <TextField
                                    color="success"
                                    fullWidth={true}
                                    size="small"
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    required={true}
                                />
                            </Box>
                            <Box sx={{
                                width: "100%",
                                height: "auto",
                            }}>
                                <Typography variant="body1" sx={{
                                    fontSize: "14px",
                                }}>
                                    End Date
                                </Typography>
                                <TextField
                                    color="success"
                                    fullWidth={true}
                                    size="small"
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    required={true}
                                />
                            </Box>
                        </Stack>
                    </Box>
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
                                loading ? <CircularProgress size={23} color="success" /> : "Submit"
                            }
                        </Button>
                    </Stack>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default ApplyListings
