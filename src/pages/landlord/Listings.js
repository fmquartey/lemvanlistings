import { Box, Typography } from '@mui/material'
import React from 'react'

const Listings = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                dispay: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px"
            }}>
            <Typography align="center">Listings</Typography>
        </Box>
    )
}

export default Listings
