import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material"
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditLis from "../../components/landlord/Edit";
import UpdateListing from "../../components/landlord/UpdateListing";
import { UserContext } from "../../context/UserContext";


const Editlisting = () => {
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
            <UpdateListing />
        </Box>
    )
}

export default Editlisting
