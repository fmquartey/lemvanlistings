import { Check, CheckCircleOutline } from '@mui/icons-material';
import { Alert, CircularProgress, Dialog, DialogContent, DialogContentText } from '@mui/material';
import React from 'react';

const AlertDialog = (props) => {
    return (
        <Dialog
            open={props.openAlert}
            onClose={props.closeAlert}
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
                                <Alert icon={<CheckCircleOutline fontSize="inherit" />} severity={props.alertType}>
                                    {
                                        props.alertMessage
                                    }
                                </Alert>
                            
                        )
                    }
                </DialogContentText>
            </DialogContent>

        </Dialog>
    );
}

export default AlertDialog;
