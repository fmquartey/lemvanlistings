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
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const SideBar = () => {
    const { openSidebar } = useContext(UserContext);

    return (
        <Box
            sx={{
                width: "250px",
                height: "100vh",
                display: openSidebar ? "block" : "none",
                transition: "5s",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "#FBFDFB",
            }}>
        </Box >
    )
}

export default SideBar;