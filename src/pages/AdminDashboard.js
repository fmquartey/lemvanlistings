import { Box } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import AdminSideBar from '../components/admin/AdminSideBar'
import { UserContext } from '../context/UserContext';
import AdminPages from '../components/admin/AdminPages';

const AdminDashboard = () => {
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
            <AdminSideBar />
            <AdminPages />
        </Box>
    )
}

export default AdminDashboard
