import { TaskAlt } from '@mui/icons-material';
import { Alert, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, MenuItem, Stack, TextField, Typography } from '@mui/material';
import Axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { apilink } from '../../Helper';

const MoveListing = (props) => {
    const {
        token,
        setMovedListing,
        userId
    } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const navigate = useNavigate();



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
            setMovedListing(true);
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
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
                Move Listing
            </DialogTitle>
            <DialogContent>
                <Stack spacing={2}>
                    <Typography variant="body1">
                        Move from {props.statusMsg}
                    </Typography>

                    <Typography variant="body1">
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
                        <MenuItem value="1">Publish</MenuItem>
                        <MenuItem value="2">Draft</MenuItem>
                        <MenuItem value="3">Hide</MenuItem>
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

export default MoveListing
