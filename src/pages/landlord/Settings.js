import { Box, Typography } from '@mui/material'
import React from 'react'

const Settings = () => {
  return (
      <Box sx={{
          width: "100%",
          height: "auto",
          dispay: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px"
      }}>
          <Typography align="center">Settings</Typography>
      </Box>
  )
}

export default Settings
