import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Divider,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import SideBar from "../components/SideBar";
import Pages from "../components/Pages";

const Landlord = () => {
    const { setShowNav } = useContext(UserContext);

    useEffect(() => {
        setShowNav(false);
    }, []);
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                position: "fixed",
            }}>
            <SideBar />
            <Pages />
        </Box>
    );
}

export default Landlord;