import { ArrowBack, Close, KeyboardBackspace } from '@mui/icons-material';
import { AppBar, Box, Button, Dialog, Divider, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react';

const ListingsView = ({ openView, closeView }) => {
    return (
        <Dialog
            fullScreen
            open={openView}
        //   onClose={handleClose}
        //   TransitionComponent={Transition}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "5px"
                }}>
                <IconButton onClick={closeView}>
                    <ArrowBack />
                </IconButton>
            </Box>
            <Divider />
            <Box
                sx={{
                    width: "100%",
                    padding: "10px 16px",
                }}>
                <Typography variant="body1"
                    sx={{
                        fontSize: "18px",
                        fontWeight: "550"
                    }}>
                    Property title
                </Typography>
            </Box>
        </Dialog>
    );
}

export default ListingsView;
