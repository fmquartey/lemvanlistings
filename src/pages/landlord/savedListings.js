import { Box, Typography } from '@mui/material'
import { useContext } from 'react';

import { Outlet } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';

const SavedListings = () => {
    const { title, setTitle, openSidebar } = useContext(UserContext);

    return (
        <Box
            sx={{
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: !openSidebar ? "85%" : "100%",
                    lg: !openSidebar ? "85%" : "100%",
                },
                height: "auto",
                margin: {
                    md: "auto",
                    lg: "auto"
                },
                padding: "10px 25px",
            }}>
            <Box sx={{
                width: "100%",
                height: "auto",
            }}>
                <Typography variant="body1"
                    sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                    }}>
                    Saved Listings {title}
                </Typography>
            </Box>
            <Outlet />
        </Box>
    )
}

export default SavedListings
