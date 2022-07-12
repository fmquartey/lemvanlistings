import { Box, Typography } from '@mui/material'
import React from 'react'

const Appointments = () => {
    return (
        <Box sx={{
            width: "100%",
            height: "auto",
            dispay: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px"
        }}>
            <Typography align="center">Appointments</Typography>
        </Box>
    )
}

export default Appointments
