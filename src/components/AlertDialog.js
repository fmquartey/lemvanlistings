import { Check, CheckCircleOutline, TaskAlt } from '@mui/icons-material';
import { Alert, CircularProgress, Dialog, DialogContent, DialogContentText } from '@mui/material';
import React from 'react';

const AlertDialog = (props) => {
    return (
        <Dialog
            open={props.openAlert}
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {
                        props.loading ? (
                            <CircularProgress
                                sx={{
                                    color: "#35BF43"
                                }} />
                        ) : (

                                <TaskAlt sx={{
                                    fontSize: "40px",
                                    color:"#35BF43"
                            }} />

                        )
                    }
                </DialogContentText>
            </DialogContent>

        </Dialog>
    );
}

export default AlertDialog;
