import { TaskAlt } from '@mui/icons-material';
import { Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, MenuItem, Stack, TextField, Typography } from '@mui/material';
import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { apilink } from '../../Helper';

const MoveTenants = (props) => {

    const {
        token,
        setMovedTenants,
        userId
    } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");



    const authAxios = Axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
            "content-type": 'multipart/form-data'
        },
    });

    const handleChange = (e) => {
        setStatus(e.target.value);
    }

    const id = props.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        authAxios.get(`/api/landlord/update_status/${status}/${id}`).then(res => {
            setLoading(false);
            console.log(res.data.data);
            props.handleClose();
            setMovedTenants(true);
            setStatus("");
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
                Move tenant
            </DialogTitle>
            <DialogContent>
                <Stack spacing={1}>
                    <Typography align="center" variant="body1" sx={{
                        fontSize: "14px",
                    }}>
                        Move from {props.statusMsg}
                    </Typography>

                    <Typography align="center" variant="body1" sx={{
                        fontSize: "14px",
                    }}>
                        To
                    </Typography>
                    <TextField
                        color="success"
                        select
                        fullWidth={true}
                        size="small"
                        value={status}
                        onChange={handleChange}
                        label="Choose an option"
                        sx={{
                            marginTop: "3px"
                        }}
                    >
                        {props.statusMsg === "Upcoming" ? null : <MenuItem value="0">Upcoming</MenuItem>}
                        {props.statusMsg === "Current" ? null : <MenuItem value="1">Current</MenuItem>}
                        {props.statusMsg === "Past" ? null : props.statusMsg === "Upcoming" ? null : <MenuItem value="2">Past</MenuItem>}
                    </TextField>
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
                                backgroundColor: "#000",
                                "&:hover": {
                                    backgroundColor: "#000",
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
                                backgroundColor: "#000",
                                "&:hover": {
                                    backgroundColor: "#000",
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

export default MoveTenants
