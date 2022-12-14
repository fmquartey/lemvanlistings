import { ArrowBack, ArrowBackIos } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import ListingForms from "../../components/landlord/Forms";
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const CreateListing = () => {
    const navigate = useNavigate();
    const { setTitle } = useContext(UserContext);

    const listings = () => {
        navigate("/app/landlord/listings")
        setTitle("")
    }

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
                    onClick={listings}>
                    <ArrowBack sx={{
                        fontSize: "large",
                        color: "#35BF43",
                    }} />
                </IconButton>
            </Box>
            {/* Forms */}
            <ListingForms />
        </Box>

    )
}

export default CreateListing
