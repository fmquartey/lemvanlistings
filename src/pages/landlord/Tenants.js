import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Tenants = () => {

  const { title, setTitle, openSidebar } = useContext(UserContext);

  useEffect(() => {
    setTitle("");
  }, [])
  
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
          Tenants {title}
        </Typography>
      </Box>
      <Outlet />
    </Box>
  )
}

export default Tenants
