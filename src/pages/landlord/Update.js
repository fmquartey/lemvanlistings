import { ArrowBack } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React, { useNavigate } from 'react';

const UpdateListing = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
            }}>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                }}>
                <IconButton
                    onClick={() => { navigate("/app/landlord/listings") }}>
                    <ArrowBack sx={{
                        fontSize: "large",
                        color: "#35BF43",
                    }} />
                </IconButton>
            </Box>
        </Box>
    );
}

export default UpdateListing;
