import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const Toast = (props) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={props.open}
            onClose={props.close}
            // message={props.message}
            autoHideDuration={6000}
        >
            <Alert severity="success" sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    );
}

export default Toast;
