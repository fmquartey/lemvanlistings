import { CircularProgress, Dialog, DialogContent, DialogContentText } from '@mui/material';
import React from 'react';

const Progress = (props) => {
    return (
        <Dialog
            open={props.openProgress}
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <CircularProgress
                        sx={{
                            color: "#35BF43"
                        }} />
                </DialogContentText>
            </DialogContent>

        </Dialog>
    );
}

export default Progress;
