import { Close } from '@mui/icons-material';
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import React from 'react';

const MsgBox = (props) => {
    return (
        <Dialog
            maxWidth="xs"
            open={props.openMsgBox}
            aria-describedby="alert-dialog-description"
            aria-labelledby="alert-dialog-title"
            sx={{
                display: "relative",
            }}
        >
            <IconButton
                onClick={props.closeMsgBox}
                size="small"
                sx={{
                    width: "auto",
                    position: "absolute",
                    top: "8px",
                    right: "10px"
                }}>
                <Close sx={{
                    fontSize: "15px",
                }} />
            </IconButton>

            <DialogTitle id="alert-dialog-title">
                {props.msgBoxTitle}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {props.msgBoxMessage}
                </DialogContentText>
            </DialogContent>

        </Dialog>
    );
}

export default MsgBox;
