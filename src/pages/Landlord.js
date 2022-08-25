import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import {
    Box,
} from "@mui/material";
import SideBar from "../components/SideBar";
import Pages from "../components/Pages";
import LandlordDrawer from "../components/landlord/LandlordDrawer";

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

            <LandlordDrawer />
            <SideBar />
            <Pages />
        </Box>
    );
}

export default Landlord;